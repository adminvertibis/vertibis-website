import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 2000;

function cleanString(value: unknown) {
  return String(value ?? "").trim().slice(0, MAX_FIELD_LENGTH);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid lead payload." }, { status: 400 });
  }

  const input = body as Record<string, unknown>;
  const email = cleanString(input.email).toLowerCase();
  const type = cleanString(input.type || "contact");

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "A valid email address is required." }, { status: 422 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { message: "Lead capture is not configured. Set LEAD_WEBHOOK_URL in Vercel." },
      { status: 503 },
    );
  }

  const lead = {
    type,
    name: cleanString(input.name),
    email,
    firm: cleanString(input.firm),
    subject: cleanString(input.subject),
    message: cleanString(input.message),
    source: "vertibis-website",
    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  }).catch(() => null);

  if (!response?.ok) {
    return NextResponse.json({ message: "Unable to submit the lead right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
