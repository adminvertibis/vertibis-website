import { permanentRedirect } from "next/navigation";

export default function LoginRedirectPage() {
  permanentRedirect("https://partner.vertibis.com/login");
}
