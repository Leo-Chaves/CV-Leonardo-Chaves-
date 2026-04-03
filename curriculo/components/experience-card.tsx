type ExperienceCardProps = {
  company: string;
  period: string;
  role: string;
  bullets: string[];
  technologies: string[];
};

export function ExperienceCard({
  company,
  period,
  role,
  bullets,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="surface-card rounded-[1.75rem] p-6 sm:p-7">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h3 className="display-font text-2xl font-semibold text-white">{company}</h3>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-sky-200/70">
            {role}
          </p>
        </div>

        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
          {period}
        </span>
      </div>

      <div className="mt-6 grid gap-3">
        {bullets.map((bullet) => (
          <p key={bullet} className="text-sm leading-7 text-slate-300">
            {bullet}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((item) => (
          <span
            key={item}
            className="pill rounded-full px-3 py-2 text-xs font-medium text-slate-100"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
