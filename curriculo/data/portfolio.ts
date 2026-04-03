export const personalInfo = {
  name: "Leonardo Chaves da Paz",
  role: "Desenvolvedor Full Stack",
  headline:
    "Construo interfaces claras, integrações úteis e experiências web pensadas para resolver problemas reais.",
  summary:
    "Atuo em projetos internos na UNICAP conectando front-end, back-end e dados para melhorar fluxos do dia a dia. Gosto de transformar demandas complexas em experiências simples, manter código sustentável e evoluir produtos com critério visual e técnico.",
  educationLabel: "Ciência da Computação na UNICAP",
  location: "Paulista, PE",
  email: "leochaves007@gmail.com",
  linkedinLabel: "Leonardo Chaves no LinkedIn",
  linkedinHref: "https://www.linkedin.com/in/leonardo-chaves-da-paz/",
  githubLabel: "Leo-Chaves no GitHub",
  githubHref: "https://github.com/Leo-Chaves",
  availability: "Disponível para estágio, freelas e projetos web.",
};

export const stats = [
  { value: "2024+", label: "projetos internos evoluindo produtos e fluxos digitais" },
  { value: "Java + Vue", label: "stack mais presente no trabalho atual" },
  { value: "UI + API + SQL", label: "atuação combinando interface, regra de negócio e dados" },
];

export const focusAreas = [
  "Interfaces web com leitura visual mais limpa e objetiva.",
  "Back-end e integrações para conectar regra de negócio, banco e operação.",
  "Projetos que equilibram usabilidade, manutenção e entrega contínua.",
];

export const highlights = [
  {
    title: "Produto com contexto real",
    description:
      "Experiência em ambientes onde a entrega precisa funcionar para pessoas, setores e rotinas já em andamento.",
  },
  {
    title: "Integração entre camadas",
    description:
      "Costumo trabalhar bem ligando interface, serviços, banco de dados e ajustes de fluxo sem perder clareza.",
  },
  {
    title: "Visual com intenção",
    description:
      "Tenho interesse em interfaces que comunicam bem, sem excesso de elementos e com identidade mais cuidadosa.",
  },
];

export const experiences = [
  {
    company: "UNICAP",
    period: "2024 - atual",
    role: "Desenvolvimento de sistemas e experiências internas",
    bullets: [
      "Participo da evolução de sistemas web usados em contexto institucional, conectando front-end, APIs e banco de dados.",
      "Atuo em manutenção e criação de funcionalidades com foco em clareza de uso, estabilidade e continuidade do produto.",
      "Trabalho com demandas reais de operação, o que ajuda a priorizar soluções práticas e sustentáveis.",
    ],
    technologies: ["Java", "Spring Boot", "Vue.js", "Quasar", "SQL Server"],
  },
  {
    company: "Base técnica complementar",
    period: "Trajetória anterior",
    role: "Suporte, organização e leitura de operação",
    bullets: [
      "Vivências anteriores em suporte e atendimento fortaleceram minha leitura de contexto, comunicação e resolução de problemas.",
      "Essa base ajuda no desenvolvimento porque aproxima o código da rotina de quem realmente usa o sistema.",
    ],
    technologies: ["Suporte técnico", "Atendimento", "Organização de processos"],
  },
];

export const skillGroups = [
  {
    title: "Construo com",
    items: ["Java", "Spring Boot", "JavaScript", "Vue.js", "Quasar", "Next.js"],
  },
  {
    title: "Conecto com",
    items: ["SQL Server", "APIs", "Integrações", "Modelagem de dados", "Regras de negócio"],
  },
  {
    title: "Trabalho com",
    items: ["Git", "Manutenção evolutiva", "Design de interface", "Metodologias ágeis"],
  },
];

export const projects = [
  {
    title: "Jogo da Forca",
    summary:
      "Projeto autoral em Next.js criado como demonstração de interface interativa, lógica de jogo e cuidado visual dentro do próprio portfólio.",
    tags: ["Next.js", "TypeScript", "UX", "UI interativa"],
    href: "/jogo-da-forca",
    cta: "Jogar",
  },
  {
    title: "Escola do Consenso",
    summary:
      "Trabalho de evolução em site institucional, com foco em organização de conteúdo, clareza de navegação e sustentação da experiência.",
    tags: ["Node.js", "Vue.js", "Quasar"],
  },
  {
    title: "Fluxos internos e integrações",
    summary:
      "Entregas voltadas a conectar interface, serviços e banco para simplificar tarefas do ambiente institucional sem expor detalhes internos demais.",
    tags: ["Java", "Spring Boot", "SQL Server"],
  },
];

export const contactItems = [
  {
    label: "Email",
    value: personalInfo.email,
    detail: "Melhor canal para propostas, networking e conversas sobre projetos.",
    href: `mailto:${personalInfo.email}`,
    cta: "Enviar mensagem",
  },
  {
    label: "GitHub",
    value: "@Leo-Chaves",
    detail: "Repositórios, experimentos e projetos em andamento.",
    href: personalInfo.githubHref,
    cta: "Abrir perfil",
  },
  {
    label: "LinkedIn",
    value: "Leonardo Chaves",
    detail: "Contato profissional e acompanhamento da minha trajetória.",
    href: personalInfo.linkedinHref,
    cta: "Ver perfil",
  },
];
