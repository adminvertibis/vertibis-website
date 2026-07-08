import { createHash, timingSafeEqual } from "crypto";
import type { AdminRole } from "./cms-types";

export const adminCookieName = "vertibis_admin_session";

const fallbackEmail = "admin@vertibis.com";
const fallbackPassword = "change-me-before-production";

function adminEmail() {
  return process.env.ADMIN_EMAIL || fallbackEmail;
}

function adminPassword() {
  return process.env.ADMIN_PASSWORD || fallbackPassword;
}

function sessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "local-development-session-secret";
}

export function getConfiguredAdminEmail() {
  return adminEmail();
}

export function getConfiguredAdminRole(): AdminRole {
  return "super_admin";
}

export function createSessionToken(email = adminEmail()) {
  return createHash("sha256")
    .update(`${email}:${adminPassword()}:${sessionSecret()}`)
    .digest("hex");
}

export function validateAdminCredentials(email: string, password: string) {
  if (process.env.NODE_ENV === "production" && (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD)) {
    return false;
  }

  return email.trim().toLowerCase() === adminEmail().toLowerCase() && password === adminPassword();
}

export function isValidAdminToken(token: string | undefined | null) {
  if (!token) {
    return false;
  }

  const expected = createSessionToken();
  const receivedBuffer = Buffer.from(token);
  const expectedBuffer = Buffer.from(expected);

  if (receivedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(receivedBuffer, expectedBuffer);
}

export function tokenFromCookieHeader(cookieHeader: string | null) {
  if (!cookieHeader) {
    return null;
  }

  const cookies = cookieHeader.split(";").map((cookie) => cookie.trim());
  const sessionCookie = cookies.find((cookie) => cookie.startsWith(`${adminCookieName}=`));
  return sessionCookie ? decodeURIComponent(sessionCookie.split("=").slice(1).join("=")) : null;
}

export function requireAdmin(request: Request) {
  const token = tokenFromCookieHeader(request.headers.get("cookie"));
  if (!isValidAdminToken(token)) {
    return null;
  }

  return {
    email: adminEmail(),
    role: getConfiguredAdminRole(),
  };
}
