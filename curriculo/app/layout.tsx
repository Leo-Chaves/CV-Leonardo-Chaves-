import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Leonardo Chaves | Portfólio",
    template: "%s | Leonardo Chaves",
  },
  description:
    "Portfólio pessoal com seleção de projetos, stack e experiências em desenvolvimento web, com uma demo dedicada ao Jogo da Forca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
