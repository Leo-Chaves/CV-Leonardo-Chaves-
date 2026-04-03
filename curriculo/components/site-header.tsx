import Link from "next/link";

type SiteHeaderProps = {
  links: Array<{
    label: string;
    href: string;
  }>;
};

export function SiteHeader({ links }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 rounded-[1.8rem] border border-white/10 bg-[#061224]/80 px-4 py-4 shadow-[0_18px_40px_rgba(0,8,20,0.32)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-6">
        <Link
          href="/"
          className="display-font text-sm font-semibold uppercase tracking-[0.28em] text-slate-100"
        >
          Leonardo Chaves
        </Link>

        <nav className="flex items-center gap-5 overflow-x-auto pb-1 text-sm text-slate-300 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
