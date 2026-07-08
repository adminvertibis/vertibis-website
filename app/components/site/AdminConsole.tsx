"use client";

import { useEffect, useMemo, useState } from "react";
import type { AuditRecord } from "@/app/lib/cms-store";
import type { CmsData, LeadSubmission } from "@/app/lib/cms-types";

type AdminPayload = {
  cms: CmsData;
  leads: LeadSubmission[];
  auditLogs: AuditRecord[];
  admin: {
    email: string;
    role: string;
  };
};

const editableSections: Array<{ key: keyof CmsData; label: string }> = [
  { key: "settings", label: "Website settings" },
  { key: "navigation", label: "Navigation" },
  { key: "websiteStats", label: "Stats" },
  { key: "homepage", label: "Homepage" },
  { key: "audiencePages", label: "Audience pages" },
  { key: "productModules", label: "Product modules" },
  { key: "pricingPlans", label: "Pricing plans" },
  { key: "reportPricing", label: "Report pricing" },
  { key: "leadForms", label: "Lead forms" },
  { key: "resources", label: "Resources" },
  { key: "faqs", label: "FAQs" },
  { key: "testimonials", label: "Testimonials" },
];

export default function AdminConsole() {
  const [email, setEmail] = useState("admin@vertibis.com");
  const [password, setPassword] = useState("");
  const [payload, setPayload] = useState<AdminPayload | null>(null);
  const [activeSection, setActiveSection] = useState<keyof CmsData>("settings");
  const [editorValue, setEditorValue] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  async function loadAdminData() {
    setStatus("Loading admin data...");
    setError("");

    const [cmsResponse, leadsResponse] = await Promise.all([
      fetch("/api/admin/cms", { credentials: "include" }),
      fetch("/api/admin/leads", { credentials: "include" }),
    ]);

    if (!cmsResponse.ok || !leadsResponse.ok) {
      setPayload(null);
      setStatus("");
      setError("Please log in to continue.");
      return;
    }

    const cmsPayload = (await cmsResponse.json()) as Omit<AdminPayload, "leads">;
    const leadsPayload = (await leadsResponse.json()) as { leads: LeadSubmission[] };
    const nextPayload = { ...cmsPayload, leads: leadsPayload.leads };
    setPayload(nextPayload);
    setEditorValue(JSON.stringify(nextPayload.cms[activeSection], null, 2));
    setStatus("Loaded.");
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadAdminData();
    // The initial load is deliberately one-shot; section changes are handled separately.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (payload) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEditorValue(JSON.stringify(payload.cms[activeSection], null, 2));
    }
  }, [activeSection, payload]);

  const selectedLabel = useMemo(
    () => editableSections.find((section) => section.key === activeSection)?.label || "Content",
    [activeSection],
  );

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Logging in...");
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      setStatus("");
      setError("Invalid credentials. Configure ADMIN_EMAIL and ADMIN_PASSWORD for production.");
      return;
    }

    setPassword("");
    await loadAdminData();
  }

  async function saveSection() {
    if (!payload) {
      return;
    }

    setStatus("Saving...");
    setError("");

    let parsed: unknown;
    try {
      parsed = JSON.parse(editorValue);
    } catch {
      setStatus("");
      setError("Invalid JSON in editor.");
      return;
    }

    const nextCms = {
      ...payload.cms,
      [activeSection]: parsed,
    } as CmsData;

    const response = await fetch("/api/admin/cms", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(nextCms),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setStatus("");
      setError(body.error || "Save failed.");
      return;
    }

    const body = (await response.json()) as { cms: CmsData };
    setPayload({ ...payload, cms: body.cms });
    setStatus(`${selectedLabel} saved.`);
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    setPayload(null);
    setStatus("");
    setError("Logged out.");
  }

  if (!payload) {
    return (
      <div className="mx-auto max-w-md rounded-[1.5rem] border border-[#dbe7f4] bg-white p-6 shadow-xl shadow-slate-900/10">
        <h1 className="text-2xl font-black tracking-[-0.04em] text-[#071527]">Website Admin</h1>
        <p className="mt-3 text-sm leading-6 text-[#607089]">
          Use environment variables for production: ADMIN_EMAIL, ADMIN_PASSWORD and
          ADMIN_SESSION_SECRET. Local development fallback email is admin@vertibis.com.
        </p>
        <form className="mt-6 space-y-4" onSubmit={login}>
          <div>
            <label className="mb-2 block text-sm font-black text-[#203451]" htmlFor="adminEmail">
              Email
            </label>
            <input
              id="adminEmail"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="min-h-12 w-full rounded-2xl border border-[#dbe7f4] px-4 text-sm font-semibold outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-black text-[#203451]" htmlFor="adminPassword">
              Password
            </label>
            <input
              id="adminPassword"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="min-h-12 w-full rounded-2xl border border-[#dbe7f4] px-4 text-sm font-semibold outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100"
            />
          </div>
          <button className="min-h-12 w-full rounded-full bg-[#0066cc] px-5 text-sm font-black text-white" type="submit">
            Login
          </button>
        </form>
        {error ? <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p> : null}
        {status ? <p className="mt-4 text-sm font-semibold text-[#607089]">{status}</p> : null}
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-[-0.04em] text-[#071527]">Website Admin</h1>
          <p className="mt-2 text-sm font-semibold text-[#607089]">
            Logged in as {payload.admin.email} · Role: {payload.admin.role}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/api/admin/leads?format=csv"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#b9d2ee] bg-white px-5 text-sm font-bold text-[#0052a3]"
          >
            Export leads CSV
          </a>
          <button
            onClick={logout}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#071527] px-5 text-sm font-bold text-white"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-[1.5rem] border border-[#dbe7f4] bg-white p-4">
          <h2 className="px-2 text-sm font-black uppercase tracking-[0.18em] text-[#0066cc]">
            Editable content
          </h2>
          <div className="mt-4 grid gap-1">
            {editableSections.map((section) => (
              <button
                key={section.key}
                type="button"
                onClick={() => setActiveSection(section.key)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-bold ${
                  activeSection === section.key
                    ? "bg-[#0066cc] text-white"
                    : "text-[#33435b] hover:bg-[#f7fbff]"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </aside>

        <section className="rounded-[1.5rem] border border-[#dbe7f4] bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-[#071527]">
              {selectedLabel}
            </h2>
            <button
              type="button"
              onClick={saveSection}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0066cc] px-5 text-sm font-black text-white"
            >
              Save section
            </button>
          </div>

          <textarea
            value={editorValue}
            onChange={(event) => setEditorValue(event.target.value)}
            spellCheck={false}
            className="mt-5 min-h-[520px] w-full rounded-2xl border border-[#dbe7f4] bg-[#071527] p-4 font-mono text-xs leading-6 text-blue-50 outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100"
          />
          {error ? <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p> : null}
          {status ? <p className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">{status}</p> : null}
        </section>
      </div>

      <section className="mt-8 rounded-[1.5rem] border border-[#dbe7f4] bg-white p-5">
        <h2 className="text-2xl font-black tracking-[-0.04em] text-[#071527]">Lead management</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-[900px] w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#dbe7f4] text-xs uppercase tracking-[0.16em] text-[#607089]">
                <th className="py-3 pr-4">Created</th>
                <th className="py-3 pr-4">Form</th>
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Email</th>
                <th className="py-3 pr-4">Organisation</th>
                <th className="py-3 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {payload.leads.map((lead) => (
                <tr key={lead.id} className="border-b border-[#edf3f9]">
                  <td className="py-3 pr-4 text-[#607089]">{new Date(lead.createdAt).toLocaleString()}</td>
                  <td className="py-3 pr-4 font-bold text-[#33435b]">{lead.formType}</td>
                  <td className="py-3 pr-4 font-bold text-[#071527]">{lead.name}</td>
                  <td className="py-3 pr-4 text-[#33435b]">{lead.email}</td>
                  <td className="py-3 pr-4 text-[#33435b]">{lead.organisation}</td>
                  <td className="py-3 pr-4 text-[#0066cc]">{lead.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!payload.leads.length ? (
            <p className="py-6 text-sm font-semibold text-[#607089]">No leads submitted yet.</p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
