const defaultPartnerPortalUrl = "https://partner.vertibis.com";

export const PARTNER_PORTAL_URL = (
  process.env.NEXT_PUBLIC_PARTNER_PORTAL_URL || defaultPartnerPortalUrl
).replace(/\/+$/, "");

export const PARTNER_REGISTER_URL = `${PARTNER_PORTAL_URL}/register`;
