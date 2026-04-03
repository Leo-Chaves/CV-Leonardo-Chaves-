import Image from "next/image";
import Link from "next/link";
import { ContactCard } from "@/components/contact-card";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import {
  contactItems,
  experiences,
  focusAreas,
  highlights,
  personalInfo,
  projects,
  skillGroups,
  stats,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div className="page-shell min-h-screen pb-16">
      <div className="page-glow hero-orb left-[-120px] top-24 h-72 w-72 bg-sky-500/30" />
      <div className="page-glow right-[-80px] top-[440px] h-80 w-80 bg-blue-300/15" />

      <SiteHeader
        links={[
          { label: "Projetos", href: "#projetos" },
          { label: "Como trabalho", href: "#como-trabalho" },
          { label: "Trajetoria", href: "#experiencia" },
          { label: "Stack", href: "#stack" },
          { label: "Contato", href: "#contato" },
          { label: "Jogo da Forca", href: "/jogo-da-forca" },
        ]}
      />

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-8 sm:px-6 lg:px-8">
        <section className="section-card fade-up rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.14fr_0.86fr] lg:items-center">
            <div>
              <span className="pill inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-100/80">
                Portfolio
              </span>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/70">
                  {personalInfo.educationLabel}
                </p>

                <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-full border border-sky-200/20 bg-sky-300/8 shadow-[0_18px_40px_rgba(5,17,39,0.3)] ring-4 ring-sky-200/8 md:w-28">
                    <Image
                      src="/perfil.jpg"
                      alt={`Foto de ${personalInfo.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 96px, 112px"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(3,9,20,0.28)_100%)]" />
                  </div>

                  <h1 className="display-font max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                    {personalInfo.name}
                  </h1>
                </div>

                <p className="mt-4 display-font max-w-4xl bg-gradient-to-r from-slate-100 via-sky-200 to-sky-400 bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-4xl lg:text-5xl">
                  {personalInfo.role}
                </p>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {personalInfo.headline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="pill rounded-full px-4 py-2 text-sm font-medium text-slate-100 hover:border-sky-200/30 hover:bg-sky-200/10"
                >
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="pill rounded-full px-4 py-2 text-sm font-medium text-slate-100 hover:border-sky-200/30 hover:bg-sky-200/10"
                >
                  LinkedIn
                </a>
                <a
                  href={personalInfo.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  className="pill rounded-full px-4 py-2 text-sm font-medium text-slate-100 hover:border-sky-200/30 hover:bg-sky-200/10"
                >
                  GitHub
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#projetos"
                  className="rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-sky-200"
                >
                  Ver projetos
                </Link>
                <Link
                  href="/jogo-da-forca"
                  className="rounded-full border border-sky-200/20 bg-sky-200/8 px-6 py-3 text-sm font-semibold text-sky-50 hover:-translate-y-0.5 hover:bg-sky-200/12"
                >
                  Jogo da Forca
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <article key={item.label} className="surface-card rounded-[1.4rem] p-5">
                    <p className="display-font text-xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="grid gap-4">
              <div className="surface-card rounded-[1.9rem] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/70">
                  Visao geral
                </p>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  {personalInfo.summary}
                </p>
              </div>

              <div className="surface-card rounded-[1.9rem] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/70">
                  O que voce encontra aqui
                </p>

                <div className="mt-5 grid gap-3">
                  {focusAreas.map((area) => (
                    <div
                      key={area}
                      className="rounded-[1.25rem] border border-white/8 bg-black/12 p-4 text-sm leading-7 text-slate-200"
                    >
                      {area}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.35rem] border border-white/8 bg-black/10 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Disponibilidade
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    {personalInfo.availability}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="projetos" className="section-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Projetos em destaque"
              title="Menos bloco de curriculo, mais trabalho que mostra como eu penso e construo."
              description="Em vez de listar tudo, esta selecao prioriza o que melhor representa meu jeito de resolver problemas, desenhar interfaces e conectar camadas de um produto web."
            />

            <Link
              href="/jogo-da-forca"
              className="inline-flex rounded-full border border-sky-200/20 bg-sky-200/8 px-5 py-3 text-sm font-semibold text-sky-50 hover:-translate-y-0.5 hover:bg-sky-200/12"
            >
              Abrir Jogo da Forca
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section
          id="como-trabalho"
          className="section-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12"
        >
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Como trabalho"
              title="Uma apresentacao fica mais forte quando o foco sai do historico completo e vai para impacto, criterio e construcao."
              description="Esses pontos resumem melhor o valor do portfolio: contexto real de uso, integracao entre camadas e cuidado com a experiencia final."
            />

            <div className="grid gap-4">
              {highlights.map((item) => (
                <article key={item.title} className="surface-card rounded-[1.5rem] p-6">
                  <h3 className="display-font text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Trajetoria"
              title="Experiencias escolhidas para dar contexto, sem transformar a home em curriculo completo."
              description="Mantive somente os recortes que ajudam a entender sua evolucao como desenvolvedor e a forma como voce trabalha hoje."
            />

            <div className="grid gap-5">
              {experiences.map((experience) => (
                <ExperienceCard key={`${experience.company}-${experience.role}`} {...experience} />
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeading
                eyebrow="Stack e rotina"
                title="Tecnologias organizadas do jeito que fazem sentido para um portfolio."
                description="Aqui entram as ferramentas que aparecem com frequencia no seu trabalho e que ajudam a contar como voce construi, integra e evolui produtos web."
              />

              <div className="mt-8 grid gap-4">
                {skillGroups.map((group) => (
                  <article key={group.title} className="surface-card rounded-[1.5rem] p-6">
                    <h3 className="display-font text-xl font-semibold text-white">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="pill rounded-full px-3 py-2 text-xs font-medium text-slate-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <article className="surface-card rounded-[1.5rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/65">
                  Base academica
                </p>
                <div className="mt-4 rounded-[1.2rem] border border-white/8 bg-black/12 p-5">
                  <h3 className="text-lg font-semibold text-white">{personalInfo.educationLabel}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    A formacao aparece como base da trajetoria, sem ocupar uma secao inteira da home.
                  </p>
                </div>
              </article>

              <article className="surface-card rounded-[1.5rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/65">
                  Foco atual
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Seguir evoluindo em desenvolvimento de software com mais projetos web,
                  interfaces melhores, integracoes solidas e cada vez mais repertorio em
                  construcao de produto.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contato" className="section-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Contato"
              title="Contato direto, sem excesso de informacao paralela."
              description="A pagina agora fecha com os canais principais e deixa o resto da conversa para quando realmente fizer sentido."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              {contactItems.map((item) => (
                <ContactCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
