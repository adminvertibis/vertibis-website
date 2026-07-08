import { getCmsData, saveAuditLog, saveLead } from "@/app/lib/cms-store";
import type { LeadSubmission, LeadStatus } from "@/app/lib/cms-types";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getUtm(requestUrl: string) {
  const url = new URL(requestUrl);
  const utm: Record<string, string> = {};

  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
    const value = url.searchParams.get(key);
    if (value) {
      utm[key] = value;
    }
  }

  return utm;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!body) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  if (clean(body.website)) {
    return Response.json({ ok: true });
  }

  const formType = clean(body.formType) || "general-contact";
  const name = clean(body.name);
  const email = clean(body.email);

  if (!name || !isEmail(email)) {
    return Response.json({ error: "Please provide a valid name and email." }, { status: 400 });
  }

  const cms = await getCmsData();
  const form = cms.leadForms.find((item) => item.id === formType && item.active);

  if (!form) {
    return Response.json({ error: "This form is not active." }, { status: 400 });
  }

  const missingField = form.fields.find((field) => field.required && !clean(body[field.name]));
  if (missingField) {
    return Response.json(
      { error: `${missingField.label} is required.` },
      { status: 400 },
    );
  }

  const lead: LeadSubmission = {
    id: crypto.randomUUID(),
    formType,
    name,
    email,
    phone: clean(body.phone),
    organisation: clean(body.organisation),
    city: clean(body.city),
    role: clean(body.role),
    message: clean(body.message),
    sourcePage: clean(body.sourcePage) || request.headers.get("referer") || "unknown",
    utm: getUtm(request.url),
    createdAt: new Date().toISOString(),
    status: "New" satisfies LeadStatus,
    notes: "",
    assignedTo: "",
    followUpDate: "",
  };

  await saveLead(lead);
  await saveAuditLog({
    action: "lead_created",
    actor: "public_form",
    detail: `${form.name} submitted by ${email}`,
  });

  return Response.json({
    ok: true,
    message: form.successMessage,
  });
}
