import Link from "next/link";

type ProjectCardProps = {
  title: string;
  summary: string;
  tags: string[];
  href?: string;
  cta?: string;
};

export function ProjectCard({
  title,
  summary,
  tags,
  href,
  cta = "Ver detalhes",
}: ProjectCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/60">
            Projeto
          </p>
          <h3 className="mt-3 display-font text-2xl font-semibold text-white">
            {title}
          </h3>
        </div>
        <span className="rounded-full border border-sky-300/15 bg-sky-300/8 px-3 py-1 text-xs font-medium text-sky-100/80">
          {href ? "Jogar" : "Projeto"}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">{summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="pill rounded-full px-3 py-2 text-xs font-medium text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 text-sm font-semibold text-sky-100">
        {href ? cta : "Projeto apresentado no portfolio"}
      </div>
    </>
  );

  if (!href) {
    return (
      <article className="section-card h-full rounded-[1.75rem] p-7">
        {content}
      </article>
    );
  }

  return (
    <Link
      href={href}
      className="section-card block h-full rounded-[1.75rem] p-7 hover:-translate-y-1 hover:border-sky-200/25 hover:shadow-[0_28px_70px_rgba(12,33,72,0.44)]"
    >
      {content}
    </Link>
  );
}
