export const portfolioData = {
  nav: [
    { id: "projetos", label: "Projects" },
    { id: "experiencia", label: "Experience" },
    { id: "sobre", label: "About" },
    { id: "contato", label: "Contact" },
  ],
  resumeLabel: "Résumé",
  themeDark: "Use dark mode",
  themeLight: "Use light mode",
  languageLabel: "Português",

  hero: {
    name: "Julia Palma Cunha",
    role: "Full Stack Developer · Brazil",
    intro:
      "I started programming to fix inventory control at my family's business. That system has been in use for over a year and now has an AI that reads handwritten orders. I work with React, TypeScript, Node.js and PostgreSQL, from the database to the interface.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    facts: [
      { label: "Now", value: "Front end at STI · UFRN" },
      { label: "Before", value: "Front end on the Petrobras Project · IMD" },
      { label: "Education", value: "Science & Technology · UFRN" },
    ],
  },

  projects: {
    tag: "Projects",
    title: "Projects",
    detailsLabel: "See details",
    videoLabel: "Watch the demo",
    closeLabel: "Close",
    items: [
      {
        id: "keychain",
        name: "Keychain ERP",
        badge: "In use · with AI",
        summary:
          "A management system I built on my own for my family's business: catalog, customers, orders, inventory and revenue, plus an AI order reader that turns a photo of a handwritten order slip into an order.",
        highlights: [
          { value: "1+ year", label: "in real use" },
          { value: "50k+", label: "items in stock" },
          { value: "97%", label: "AI accuracy" },
        ],
        stack: ["React", "Firebase", "Material UI", "Claude API", "Vercel Functions"],
        media: { type: "video", src: "/keychain-erp-preview.mp4", poster: "/keychain-erp-poster.jpg" },
        video: "/keychain-erp.mp4",
        details: [
          {
            title: "The problem",
            text: "Every restock meant counting inventory by hand, and the spreadsheet didn't connect orders, customers and stock. On peak days, paper orders piled up and inventory fell behind.",
          },
          {
            title: "What I built",
            text: "I modeled the flows from the real operation. The catalog is the source of truth, and each order is saved in an atomic transaction that validates and deducts stock. Revenue, seasonality and best-seller dashboards support restocking decisions.",
          },
          {
            title: "Applied AI",
            text: "A photo of the slip becomes a draft order. The AI can only choose registered products and customers, flags its doubts and explains why. Nothing is saved without human review.",
          },
          {
            title: "Results",
            text: "97.3% of items read correctly across 10 real slips (220 of 226), no invented products and, in an initial test, 63% less order entry time, at about US$0.05 per slip.",
          },
        ],
      },
      {
        id: "finance",
        name: "Porto Finance App",
        badge: "Full stack · in progress",
        summary:
          "An end-to-end personal finance application: a REST API with business rules and per-user data isolation, JWT authentication with automatic session renewal, integration tests and CI.",
        highlights: [
          { value: "JWT", label: "access + refresh token" },
          { value: "Jest", label: "integration tests" },
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
          { label: "API docs", url: "https://finance-app-api-xu88.onrender.com/docs/" },
          { label: "GitHub · API", url: "https://github.com/juliapalmacunha/finance-app-api" },
          { label: "GitHub · interface", url: "https://github.com/juliapalmacunha/portofinance" },
        ],
        details: [
          {
            title: "Back end",
            text: "A REST API in Node.js and Express, with data modeled in PostgreSQL and Prisma: accounts, categories, transactions and investments, with validation and per-user data isolation.",
          },
          {
            title: "Authentication",
            text: "JWT with access and refresh tokens. On the front end, an Axios interceptor renews the session automatically and retries the original request.",
          },
          {
            title: "Quality",
            text: "Route integration tests with Jest and Supertest, a CI pipeline on GitHub Actions and a Docker development environment.",
          },
        ],
      },
    ],
    early: {
      title: "Early projects",
      items: [
        {
          name: "Delivery Burger",
          text: "Online menu with a shopping cart and checkout through WhatsApp.",
          image: "/delivery.png",
          siteUrl: "https://projeto-delivery-pi.vercel.app/",
          githubUrl: "https://github.com/juliapalmacunha/Projeto-delivery",
        },
      ],
      siteLabel: "Site",
      codeLabel: "Code",
    },
  },

  experience: {
    tag: "Experience",
    title: "Experience",
    items: [
      {
        role: "Front-end Developer",
        org: "STI · UFRN",
        period: "Apr 2026 – present",
        text: "I build interfaces, components and pages for the new portal of UFRN's International Relations Office and take part in refining requirements with the departments involved.",
        stack: ["Vue.js", "Nuxt", "TypeScript", "Pinia"],
      },
      {
        role: "Front-end Developer · Petrobras Project",
        org: "Instituto Metrópole Digital · UFRN",
        period: "Sep 2025 – Apr 2026",
        text: "I built the first screens of the Maintenance module of an industrial asset monitoring application, created shared components that standardized the module and structured QA reports that led to data integrity bug fixes.",
        stack: ["React", "TypeScript", "TanStack Query", "Ant Design"],
      },
    ],
  },

  about: {
    tag: "About",
    title: "About",
    photo: null,
    paragraphs: [
      "I study Science and Technology at UFRN and started programming by solving a problem in my own family's business. Since then, I like to understand the business rules before choosing the technology.",
      "Professionally, I work on the front end. In my own projects I build end to end, from the data model to the interface, and I apply AI with the care it requires: narrow scope, human review and metrics before trusting it.",
    ],
    skillsTitle: "Technologies",
    skills: [
      { title: "Front end", items: ["React", "TypeScript", "Vue.js", "Nuxt", "Tailwind CSS", "Material UI", "shadcn/ui", "TanStack Query"] },
      { title: "Back end & data", items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma", "Firebase"] },
      { title: "Quality", items: ["Git", "GitHub Actions", "Docker", "Jest", "Supertest"] },
      { title: "AI", items: ["LLM integration", "Prompt engineering", "Evaluation with test cases", "Python (basic)"] },
    ],
  },

  contact: {
    tag: "Contact",
    title: "Contact",
    text: "I'm looking for an internship or junior developer role. Reach me by email or LinkedIn.",
    email: "juliapcunnha@gmail.com",
  },

  links: {
    github: "https://github.com/juliapalmacunha",
    linkedin: "https://www.linkedin.com/in/julia-palma-cunha/",
    resume: "/julia-palma-cunha-curriculo.pdf",
  },
  footer: "© 2026 Julia Palma Cunha",
};