import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiJest,
  SiGithubactions,
  SiGithub,
} from "react-icons/si";


export const personalInfo = {
  name: "Julia Palma Cunha",
  role: "Full Stack",
  email: "juliapcunha13@gmail.com",
  socialLinks: {
    github: "https://github.com/juliapalmacunha",
    linkedin: "https://www.linkedin.com/in/julia-palma-cunha/",
  },
  welcomeMessage: "Olá, bem-vindo(a) ao meu portfólio",
  profession: "Desenvolvedora",
  aboutParagraphs: [
    "Atualmente atuo como Desenvolvedora Full Stack na STI da UFRN, desenvolvendo aplicações web e contribuindo para a evolução de soluções utilizadas pela instituição. Também sou estudante de Ciências e Tecnologia.",

    "Trabalho principalmente com React, TypeScript, Node.js, Express e PostgreSQL, com foco em arquitetura de software, código limpo e desenvolvimento de aplicações escaláveis.",

    "Sou movida por desafios, aprendizado contínuo e pela construção de soluções que gerem impacto real. Busco oportunidades para crescer, colaborar com grandes equipes e desenvolver produtos de alta qualidade.",
  ],
  resumeDescription:
    "Quer analisar minha trajetória técnica e experiência detalhada? Faça o download do meu currículo atualizado.",
    resumeTitle: "Baixar Currículo",
  resumeUrl: "/Julia Palma Cunha CurriculoDev.pdf",
};

export const projects = [
  {
    id: "keychain-erp",
    name: "Keychain ERP",
    text: "Sistema de gestão de vendas com dashboards, cadastro de produtos e clientes, controle de estoque e análise de metas.",
    technologies: ["React", "Firebase", "Mui", "Recharts"],
    image: "/erp.png",
    siteUrl: "https://keychain-erp.vercel.app/",
    githubUrl: "https://github.com/juliapalmacunha/Keychain-ERP",
  },
  {
    id: "delivery-burguer",
    name: "Delivery Burguer",
    text: "Plataforma de delivery com cardápio online, carrinho de compras e finalização direta via WhatsApp.",
    technologies: ["Javascript", "Html", "Tailwindcss"],
    image: "/delivery.png",
    siteUrl: "https://projeto-delivery-pi.vercel.app/",
    githubUrl: "https://github.com/juliapalmacunha/Projeto-delivery",
  },
  {
    id: "jogo-educativo",
    name: "Jogo Educativo",
    text: "Jogo interativo para ensinar inglês a crianças com feedback positivo e pronúncia dos nomes dos animais.",
    technologies: ["Javascript", "Html", "Css"],
    image: "/jogo.png",
    siteUrl: "https://jogo-educativo-sigma.vercel.app/",
    githubUrl: "https://github.com/juliapalmacunha/jogo-educativo",
  },
];

export const skills = [
  {
    title: "Front-end & UI",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
    ],
  },
  {
    title: "Back-end & Dados",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#EEEEEE" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#FFFFFF" },
    ],
  },
  {
    title: "Engenharia & Qualidade",
    items: [
      { name: "Git & GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
    ],
  },
];

export const descriptionSections = {
  projects:
    "Confira alguns projetos que desenvolvi aplicando boas práticas de engenharia de software, arquitetura e desenvolvimento de aplicações modernas.",

  contact:
    "Entre em contato comigo para conversar sobre oportunidades, projetos ou novas possibilidades de colaboração.",
};

export const bestPractices = [
  "Arquitetura SOLID",
  "Clean Code",
  "Testes Automatizados",
  "Cultura CI/CD",
  "Componentização",
];

export const titleSections = {
  about: "Sobre",
  projects: "Projetos",
  contact: "Contato",
};

export const portfolioData = {
  personalInfo,
  projects,
  skills,
  bestPractices,
  descriptionSections,
  titleSections,
};
