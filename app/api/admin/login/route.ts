import { adminCookieName, createSessionToken, validateAdminCredentials } from "@/app/lib/admin-auth";
import { saveAuditLog } from "@/app/lib/cms-store";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: string; password?: string }
    | null;

  const email = body?.email?.trim() || "";
  const password = body?.password || "";

  if (!validateAdminCredentials(email, password)) {
    return Response.json({ error: "Invalid admin credentials" }, { status: 401 });
  }

  await saveAuditLog({
    action: "admin_login",
    actor: email,
    detail: "Admin user logged in",
  });

  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  const token = createSessionToken(email);

  return Response.json(
    { ok: true },
    {
      headers: {
        "Set-Cookie": `${adminCookieName}=${encodeURIComponent(
          token,
        )}; Path=/; HttpOnly; SameSite=Lax; Max-Age=28800${secure}`,
      },
    },
  );
}
