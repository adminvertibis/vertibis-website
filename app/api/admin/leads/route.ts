import { requireAdmin } from "@/app/lib/admin-auth";
import { getLeads } from "@/app/lib/cms-store";
import type { LeadSubmission } from "@/app/lib/cms-types";

function csvEscape(value: unknown) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function leadsToCsv(leads: LeadSubmission[]) {
  const headers = [
    "id",
    "formType",
    "name",
    "email",
    "phone",
    "organisation",
    "city",
    "role",
    "message",
    "sourcePage",
    "createdAt",
    "status",
    "notes",
    "assignedTo",
    "followUpDate",
  ];

  const rows = leads.map((lead) =>
    headers.map((header) => csvEscape(lead[header as keyof LeadSubmission])).join(","),
  );

  return [headers.join(","), ...rows].join("\n");
}

export async function GET(request: Request) {
  const admin = requireAdmin(request);
  if (!admin) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = await getLeads();
  const url = new URL(request.url);

  if (url.searchParams.get("format") === "csv") {
    return new Response(leadsToCsv(leads), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": "attachment; filename=vertibis-leads.csv",
      },
    });
  }

  return Response.json({ leads });
}
