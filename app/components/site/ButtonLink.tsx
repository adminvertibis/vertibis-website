import Link from "next/link";
import type { CtaLink } from "@/app/lib/cms-types";

const baseClasses =
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]";

const variantClasses = {
  primary:
    "bg-[#0066cc] text-white shadow-lg shadow-blue-900/15 hover:-translate-y-0.5 hover:bg-[#0052a3]",
  secondary:
    "border border-[#b9d2ee] bg-white text-[#0052a3] hover:-translate-y-0.5 hover:border-[#0066cc] hover:bg-[#f4f8ff]",
  ghost: "text-[#16304f] hover:bg-[#eef6ff]",
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function ButtonLink({ cta, className = "" }: { cta: CtaLink; className?: string }) {
  const classes = `${baseClasses} ${variantClasses[cta.variant || "secondary"]} ${className}`;

  if (isExternal(cta.href)) {
    return (
      <a className={classes} href={cta.href} target="_blank" rel="noopener noreferrer">
        {cta.label}
      </a>
    );
  }

  return (
    <Link className={classes} href={cta.href}>
      {cta.label}
    </Link>
  );
}
