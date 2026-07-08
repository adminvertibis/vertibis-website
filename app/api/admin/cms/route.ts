import { getConfiguredAdminEmail, getConfiguredAdminRole, requireAdmin } from "@/app/lib/admin-auth";
import { getAuditLogs, getCmsData, saveAuditLog, saveCmsData } from "@/app/lib/cms-store";
import type { CmsData } from "@/app/lib/cms-types";

export async function GET(request: Request) {
  const admin = requireAdmin(request);
  if (!admin) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [cms, auditLogs] = await Promise.all([getCmsData(), getAuditLogs()]);

  return Response.json({
    cms,
    auditLogs,
    admin: {
      email: getConfiguredAdminEmail(),
      role: getConfiguredAdminRole(),
    },
  });
}

export async function PUT(request: Request) {
  const admin = requireAdmin(request);
  if (!admin) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as CmsData | null;

  if (!body?.settings || !body?.navigation || !body?.pricingPlans || !body?.leadForms) {
    return Response.json({ error: "Invalid CMS payload" }, { status: 400 });
  }

  await saveCmsData(body);
  await saveAuditLog({
    action: "cms_updated",
    actor: admin.email,
    detail: "CMS content updated from admin console",
  });

  return Response.json({ ok: true, cms: body });
}
