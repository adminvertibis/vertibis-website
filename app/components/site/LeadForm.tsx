"use client";

import { useMemo, useState } from "react";
import type { LeadFormDefinition } from "@/app/lib/cms-types";

function emptyValues(form: LeadFormDefinition) {
  return Object.fromEntries(form.fields.map((field) => [field.name, ""])) as Record<string, string>;
}

export default function LeadForm({
  forms,
  defaultFormId = "general-contact",
  sourcePage,
}: {
  forms: LeadFormDefinition[];
  defaultFormId?: string;
  sourcePage: string;
}) {
  const activeForms = forms.filter((form) => form.active);
  const initialForm = activeForms.find((form) => form.id === defaultFormId) || activeForms[0];
  const [formId, setFormId] = useState(initialForm?.id || "general-contact");
  const currentForm = useMemo(
    () => activeForms.find((form) => form.id === formId) || activeForms[0],
    [activeForms, formId],
  );
  const [values, setValues] = useState<Record<string, string>>(currentForm ? emptyValues(currentForm) : {});
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  if (!currentForm) {
    return <p className="text-sm text-[#607089]">No active lead form is configured.</p>;
  }

  function switchForm(nextFormId: string) {
    const nextForm = activeForms.find((form) => form.id === nextFormId);
    if (!nextForm) {
      return;
    }
    setFormId(nextForm.id);
    setValues(emptyValues(nextForm));
    setState("idle");
    setMessage("");
  }

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        formType: currentForm.id,
        sourcePage,
        website: honeypot,
      }),
    });

    const payload = (await response.json().catch(() => ({}))) as { message?: string; error?: string };

    if (!response.ok) {
      setState("error");
      setMessage(payload.error || "Something went wrong. Please try again.");
      return;
    }

    setState("success");
    setValues(emptyValues(currentForm));
    setMessage(payload.message || currentForm.successMessage);
  }

  return (
    <form className="space-y-5" onSubmit={submitForm}>
      <div>
        <label className="mb-2 block text-sm font-black text-[#203451]" htmlFor="formType">
          Enquiry type
        </label>
        <select
          id="formType"
          value={formId}
          onChange={(event) => switchForm(event.target.value)}
          className="min-h-12 w-full rounded-2xl border border-[#dbe7f4] bg-white px-4 text-sm font-semibold text-[#203451] outline-none transition focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100"
        >
          {activeForms.map((form) => (
            <option key={form.id} value={form.id}>
              {form.name}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {currentForm.fields.map((field) => {
          const className =
            "min-h-12 w-full rounded-2xl border border-[#dbe7f4] bg-white px-4 text-sm font-semibold text-[#203451] outline-none transition placeholder:text-[#8ca0ba] focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100";
          const isWide = field.type === "textarea" || field.name === "message";

          return (
            <div key={`${currentForm.id}-${field.name}`} className={isWide ? "sm:col-span-2" : ""}>
              <label className="mb-2 block text-sm font-black text-[#203451]" htmlFor={field.name}>
                {field.label}
                {field.required ? <span className="text-[#0066cc]"> *</span> : null}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                  className={`${className} min-h-32 py-3`}
                />
              ) : field.type === "select" ? (
                <select
                  id={field.name}
                  required={field.required}
                  value={values[field.name] || ""}
                  onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                  className={className}
                >
                  <option value="">Select</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                  className={className}
                />
              )}
              {field.helpText ? <p className="mt-1 text-xs text-[#607089]">{field.helpText}</p> : null}
            </div>
          );
        })}
      </div>

      <p className="rounded-2xl bg-[#f7fbff] p-4 text-xs leading-6 text-[#607089]">
        {currentForm.consentText}
      </p>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0066cc] px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#0052a3] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? "Submitting..." : "Submit enquiry"}
      </button>

      {message ? (
        <p
          className={`rounded-2xl p-4 text-sm font-semibold ${
            state === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
