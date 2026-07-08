import type { Metadata } from "next";
import AdminConsole from "../components/site/AdminConsole";

export const metadata: Metadata = {
  title: "Admin CMS",
  description: "Admin CMS for Vertibis website content, pricing, forms, product modules and leads.",
};

export default function AdminPage() {
  return (
    <section className="min-h-screen bg-[#f7fbff]">
      <AdminConsole />
    </section>
  );
}
