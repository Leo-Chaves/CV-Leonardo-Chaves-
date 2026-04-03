export const personalInfo = {
  name: "Leonardo Chaves da Paz",
  role: "Desenvolvedor Full Stack em formacao",
  headline:
    "Construo interfaces claras, integracoes uteis e experiencias web pensadas para resolver problemas reais.",
  summary:
    "Atuo em projetos internos na UNICAP conectando front-end, back-end e dados para melhorar fluxos do dia a dia. Gosto de transformar demandas complexas em experiencias simples, manter codigo sustentavel e evoluir produtos com criterio visual e tecnico.",
  educationLabel: "Ciencia da Computacao na UNICAP",
  location: "Paulista, PE",
  email: "leochaves007@gmail.com",
  linkedinLabel: "Leonardo Chaves no LinkedIn",
  linkedinHref: "https://www.linkedin.com/in/leonardo-chaves-da-paz/",
  githubLabel: "Leo-Chaves no GitHub",
  githubHref: "https://github.com/Leo-Chaves",
  availability: "Disponivel para estagio, freelas e projetos web.",
};

export const stats = [
  { value: "2024+", label: "projetos internos evoluindo produtos e fluxos digitais" },
  { value: "Java + Vue", label: "stack mais presente no trabalho atual" },
  { value: "UI + API + SQL", label: "atuacao combinando interface, regra de negocio e dados" },
];

export const focusAreas = [
  "Interfaces web com leitura visual mais limpa e objetiva.",
  "Back-end e integracoes para conectar regra de negocio, banco e operacao.",
  "Projetos que equilibram usabilidade, manutencao e entrega continua.",
];

export const highlights = [
  {
    title: "Produto com contexto real",
    description:
      "Experiencia em ambientes onde a entrega precisa funcionar para pessoas, setores e rotinas ja em andamento.",
  },
  {
    title: "Integracao entre camadas",
    description:
      "Costumo trabalhar bem ligando interface, servicos, banco de dados e ajustes de fluxo sem perder clareza.",
  },
  {
    title: "Visual com intencao",
    description:
      "Tenho interesse em interfaces que comunicam bem, sem excesso de elementos e com identidade mais cuidadosa.",
  },
];

export const experiences = [
  {
    company: "UNICAP",
    period: "2024 - atual",
    role: "Desenvolvimento de sistemas e experiencias internas",
    bullets: [
      "Participo da evolucao de sistemas web usados em contexto institucional, conectando front-end, APIs e banco de dados.",
      "Atuo em manutencao e criacao de funcionalidades com foco em clareza de uso, estabilidade e continuidade do produto.",
      "Trabalho com demandas reais de operacao, o que ajuda a priorizar solucoes praticas e sustentaveis.",
    ],
    technologies: ["Java", "Spring Boot", "Vue.js", "Quasar", "SQL Server"],
  },
  {
    company: "Base tecnica complementar",
    period: "trajetoria anterior",
    role: "Suporte, organizacao e leitura de operacao",
    bullets: [
      "Vivencias anteriores em suporte e atendimento fortaleceram minha leitura de contexto, comunicacao e resolucao de problemas.",
      "Essa base ajuda no desenvolvimento porque aproxima o codigo da rotina de quem realmente usa o sistema.",
    ],
    technologies: ["Suporte tecnico", "Atendimento", "Organizacao de processos"],
  },
];

export const skillGroups = [
  {
    title: "Construo com",
    items: ["Java", "Spring Boot", "JavaScript", "Vue.js", "Quasar", "Next.js"],
  },
  {
    title: "Conecto com",
    items: ["SQL Server", "APIs", "Integracoes", "Modelagem de dados", "Regras de negocio"],
  },
  {
    title: "Trabalho com",
    items: ["Git", "Manutencao evolutiva", "Design de interface", "Metodologias ageis"],
  },
];

export const projects = [
  {
    title: "Jogo da Forca",
    summary:
      "Projeto autoral em Next.js criado como demonstracao de interface interativa, logica de jogo e cuidado visual dentro do proprio portfolio.",
    tags: ["Next.js", "TypeScript", "UX", "UI interativa"],
    href: "/jogo-da-forca",
    cta: "Abrir demo",
  },
  {
    title: "Escola do Consenso",
    summary:
      "Trabalho de evolucao em site institucional, com foco em organizacao de conteudo, clareza de navegacao e sustentacao da experiencia.",
    tags: ["Node.js", "Vue.js", "Quasar"],
  },
  {
    title: "Fluxos internos e integracoes",
    summary:
      "Entregas voltadas a conectar interface, servicos e banco para simplificar tarefas do ambiente institucional sem expor detalhes internos demais.",
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
    detail: "Repositorios, experimentos e projetos em andamento.",
    href: personalInfo.githubHref,
    cta: "Abrir perfil",
  },
  {
    label: "LinkedIn",
    value: "Leonardo Chaves",
    detail: "Contato profissional e acompanhamento da minha trajetoria.",
    href: personalInfo.linkedinHref,
    cta: "Ver perfil",
  },
];
