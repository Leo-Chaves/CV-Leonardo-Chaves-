type ContactCardProps = {
  label: string;
  value: string;
  detail: string;
  href?: string;
  cta?: string;
};

export function ContactCard({ label, value, detail, href, cta }: ContactCardProps) {
  const wrapperClassName =
    "surface-card group rounded-[1.5rem] p-6 sm:p-7 transition hover:-translate-y-1 hover:border-sky-200/25 hover:shadow-[0_24px_60px_rgba(5,17,39,0.34)]";

  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/65">
        {label}
      </p>
      <h3 className="mt-4 text-xl font-semibold leading-9 text-white break-words">
        {value}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{detail}</p>
      {cta ? (
        <p className="mt-6 text-sm font-semibold text-sky-100 group-hover:text-sky-50">
          {cta}
        </p>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={wrapperClassName}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={wrapperClassName}>{content}</article>
  );
}
