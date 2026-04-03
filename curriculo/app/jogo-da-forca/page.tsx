import type { Metadata } from "next";
import Link from "next/link";
import { HangmanGame } from "@/components/hangman-game";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Jogo da Forca",
  description:
    "Pagina dedicada ao projeto Jogo da Forca com interface elegante e jogabilidade completa em Next.js.",
};

export default function HangmanProjectPage() {
  return (
    <div className="page-shell min-h-screen pb-16">
      <div className="page-glow left-[-60px] top-32 h-72 w-72 bg-sky-400/20" />
      <div className="page-glow right-[-120px] top-[380px] h-96 w-96 bg-blue-300/12" />

      <SiteHeader
        links={[
          { label: "Portfolio", href: "/" },
          { label: "Contato", href: "/#contato" },
        ]}
      />

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-8 sm:px-6 lg:px-8">
        <section className="section-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="max-w-4xl">
            <div>
              <span className="pill inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-100/80">
                Projeto em destaque
              </span>
              <h1 className="mt-6 display-font text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Jogo da Forca
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Uma demonstracao de interface interativa aplicada a um projeto classico,
                mantendo a mesma linguagem visual do portfolio: fundo em azul escuro,
                degrades suaves, componentes limpos e agora uma experiencia mais
                refinada para desktop e mobile.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="rounded-full border border-sky-200/20 bg-sky-200/8 px-6 py-3 text-sm font-semibold text-sky-50 hover:-translate-y-0.5 hover:bg-sky-200/12"
                >
                  Voltar ao portfolio
                </Link>
                <a
                  href="#jogo"
                  className="rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-sky-200"
                >
                  Jogar agora
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="pill rounded-full px-4 py-2 text-sm font-medium text-slate-100">
                  Titulos em portugues
                </span>
                <span className="pill rounded-full px-4 py-2 text-sm font-medium text-slate-100">
                  Popup de vitoria e derrota
                </span>
                <span className="pill rounded-full px-4 py-2 text-sm font-medium text-slate-100">
                  Layout mais confortavel no mobile
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="jogo">
          <HangmanGame />
        </section>
      </main>
    </div>
  );
}
