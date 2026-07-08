export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const titleColor = tone === "light" ? "text-white" : "text-[#071527]";
  const copyColor = tone === "light" ? "text-blue-100" : "text-[#607089]";
  const eyebrowColor = tone === "light" ? "text-[#65d6c8]" : "text-[#0066cc]";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-extrabold uppercase tracking-[0.22em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${copyColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
