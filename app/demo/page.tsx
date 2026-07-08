import { redirect } from "next/navigation";

export default function DemoRedirectPage() {
  redirect("/contact?type=ca-partner");
}
