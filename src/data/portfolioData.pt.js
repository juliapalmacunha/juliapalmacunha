export const portfolioData = {
  nav: [
    { id: "projetos", label: "Projetos" },
    { id: "experiencia", label: "Experiência" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
  ],
  resumeLabel: "Currículo",
  themeDark: "Usar modo escuro",
  themeLight: "Usar modo claro",
  languageLabel: "English",

  hero: {
    name: "Julia Palma Cunha",
    role: "Desenvolvedora Full Stack",
    intro:
      "Comecei a programar para resolver o controle de estoque da empresa da minha família. Esse sistema está em uso há mais de um ano e hoje tem uma IA que lê pedidos escritos à mão. Trabalho com React, TypeScript, Node.js e PostgreSQL, do banco de dados à interface.",
    ctaProjects: "Ver projetos",
    ctaContact: "Entrar em contato",
    facts: [
      { label: "Agora", value: "Front-end na STI · UFRN" },
      { label: "Antes", value: "Front-end no Projeto Petrobras · IMD" },
      { label: "Formação", value: "Ciências e Tecnologia · UFRN" },
    ],
  },

  projects: {
    tag: "Projetos",
    title: "Projetos",
    detailsLabel: "Ver detalhes",
    videoLabel: "Assistir à demonstração",
    closeLabel: "Fechar",
    items: [
      {
        id: "keychain",
        name: "Keychain ERP",
        badge: "Em uso · com IA",
        summary:
          "Sistema de gestão que desenvolvi sozinha para o negócio da minha família: catálogo, clientes, pedidos, estoque e faturamento, mais um leitor de pedidos com IA que transforma a foto de um talão escrito à mão em pedido.",
        highlights: [
          { value: "+1 ano", label: "em uso real" },
          { value: "50 mil+", label: "itens em estoque" },
          { value: "97%", label: "de acerto da IA" },
        ],
        stack: ["React", "Firebase", "Material UI", "Claude API", "Vercel Functions"],
        media: { type: "video", src: "/keychain-erp-preview.mp4", poster: "/keychain-erp-poster.png" },
        video: "/keychain-erp.mp4",
        details: [
          {
            title: "O problema",
            text: "Cada reposição exigia contar o estoque à mão, e a planilha não conectava pedido, cliente e estoque. Nos dias de pico, os pedidos em papel acumulavam e o estoque ficava desatualizado.",
          },
          {
            title: "O que construí",
            text: "Modelei os fluxos a partir da operação real. O catálogo é a fonte da verdade, e cada pedido é gravado numa transação atômica que valida e baixa o estoque. Dashboards de faturamento, sazonalidade e mais vendidos apoiam as decisões de reposição.",
          },
          {
            title: "A IA aplicada",
            text: "A foto do talão vira um rascunho de pedido. A IA só pode escolher produtos e clientes cadastrados, marca as dúvidas e explica o porquê. Nada é salvo sem revisão humana.",
          },
          {
            title: "Resultados",
            text: "97,3% dos itens lidos corretamente em 10 talões reais (220 de 226), nenhum produto inventado e, num teste inicial, 63% menos tempo de cadastro, a cerca de US$ 0,05 por talão.",
          },
        ],
      },
      {
        id: "finance",
        name: "Porto Finance App",
        badge: "Full stack · em desenvolvimento",
        summary:
          "Aplicação de gestão financeira de ponta a ponta: API REST com regras de negócio e dados isolados por usuário, autenticação com JWT e renovação automática de sessão, testes de integração e CI.",
        highlights: [
          { value: "JWT", label: "access + refresh token" },
          { value: "Jest", label: "testes de integração" },
          { value: "CI", label: "GitHub Actions + Docker" },
        ],
        stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "React", "TanStack Query", "Docker"],
        media: {
          type: "code",
          lines: [
            "POST   /api/users",
            "POST   /api/users/auth/login",
            "POST   /api/users/auth/refresh-token",
            "GET    /api/users/me/balance",
            "GET    /api/transactions/me",
            "POST   /api/transactions/me",
            "PATCH  /api/transactions/me/{id}",
          ],
        },
        links: [
          { label: "Documentação da API", url: "https://finance-app-api-xu88.onrender.com/docs/" },
          { label: "GitHub · API", url: "https://github.com/juliapalmacunha/finance-app-api" },
          { label: "GitHub · interface", url: "https://github.com/juliapalmacunha/portofinance" },
        ],
        details: [
          {
            title: "Back-end",
            text: "API REST em Node.js e Express, com dados modelados em PostgreSQL e Prisma: contas, categorias, transações e investimentos, com validações e isolamento das informações por usuário.",
          },
          {
            title: "Autenticação",
            text: "JWT com access e refresh token. No front, um interceptor do Axios renova a sessão automaticamente e repete a requisição original.",
          },
          {
            title: "Qualidade",
            text: "Testes de integração das rotas com Jest e Supertest, pipeline de CI no GitHub Actions e ambiente de desenvolvimento com Docker.",
          },
        ],
      },
    ],
    early: {
      title: "Primeiros projetos",
      items: [
        {
          name: "Delivery Burguer",
          text: "Cardápio online com carrinho e pedido finalizado pelo WhatsApp.",
          image: "/delivery.png",
          siteUrl: "https://projeto-delivery-pi.vercel.app/",
          githubUrl: "https://github.com/juliapalmacunha/Projeto-delivery",
        },
      ],
      siteLabel: "Site",
      codeLabel: "Código",
    },
  },

  experience: {
    tag: "Experiência",
    title: "Experiência",
    items: [
      {
        role: "Desenvolvedora Front-end",
        org: "STI · UFRN",
        period: "abr/2026 – atual",
        text: "Desenvolvo interfaces, componentes e páginas do novo portal da Superintendência de Relações Internacionais e participo do refinamento de requisitos com os setores envolvidos.",
        stack: ["Vue.js", "Nuxt", "TypeScript", "Pinia"],
      },
      {
        role: "Desenvolvedora Front-end · Projeto Petrobras",
        org: "Instituto Metrópole Digital · UFRN",
        period: "set/2025 – abr/2026",
        text: "Desenvolvi as primeiras telas do módulo de Manutenção de uma aplicação de monitoramento de ativos industriais, criei componentes compartilhados que padronizaram o módulo e estruturei relatórios de QA que levaram à correção de bugs de integridade de dados.",
        stack: ["React", "TypeScript", "TanStack Query", "Ant Design"],
      },
    ],
  },

  about: {
    tag: "Sobre",
    title: "Sobre",
    photo: null,
    paragraphs: [
      "Sou estudante de Ciências e Tecnologia na UFRN e comecei a programar resolvendo um problema da minha própria família. Desde então, gosto de entender a regra de negócio antes de escolher a tecnologia.",
      "Profissionalmente, atuo no front-end. Nos meus projetos, construo de ponta a ponta, do modelo de dados à interface, e hoje aplico IA com o cuidado que ela exige: escopo restrito, revisão humana e métricas antes de confiar.",
    ],
    skillsTitle: "Tecnologias",
    skills: [
      { title: "Front-end", items: ["React", "TypeScript", "Vue.js", "Nuxt", "Tailwind CSS", "Material UI", "shadcn/ui", "TanStack Query"] },
      { title: "Back-end e dados", items: ["Node.js", "Express", "APIs REST", "PostgreSQL", "Prisma", "Firebase"] },
      { title: "Qualidade", items: ["Git", "GitHub Actions", "Docker", "Jest", "Supertest"] },
      { title: "IA", items: ["Integração de LLMs", "Prompt engineering", "Avaliação com casos de teste", "Python (básico)"] },
    ],
  },

  contact: {
    tag: "Contato",
    title: "Contato",
    text: "Estou procurando estágio ou vaga júnior como desenvolvedora. Me chama por e-mail ou LinkedIn.",
    email: "juliapcunnha@gmail.com",
  },

  links: {
    github: "https://github.com/juliapalmacunha",
    linkedin: "https://www.linkedin.com/in/julia-palma-cunha/",
    resume: "/julia-palma-cunha-curriculo.pdf",
  },
  footer: "© 2026 Julia Palma Cunha",
};