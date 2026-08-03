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
  profession: "Developer",

  welcomeMessage: "Hello, welcome to my portfolio",

  aboutParagraphs: [
    "I am currently working as a Full Stack Developer at STI - UFRN, where I build web applications and contribute to improving digital solutions used by the institution. I am also pursuing a degree in Science and Technology.",

    "My main stack includes React, TypeScript, Node.js, Express, and PostgreSQL, with a focus on software architecture, clean and maintainable code, and building scalable applications.",

    "I enjoy solving problems, continuous learning, and creating solutions that generate real impact. I am looking for opportunities to grow, collaborate with high-performing teams, and contribute to building high-quality products.",
  ],
  resumeDescription:"Would you like to learn more about my technical background and professional experience? Download my updated resume.",

  resumeTitle: "Download Resume",

  resumeUrl: "/Julia Palma Cunha CurriculoDev.pdf",
};

export const projects = [
  {
    id: "keychain-erp",

    name: "Keychain ERP",

    text: "Sales management system featuring dashboards, product and customer management, inventory control, and goal tracking.",

    technologies: ["React", "Firebase", "MUI", "Recharts"],

    image: "/public/erp.png",

    siteUrl: "https://keychain-erp.vercel.app/",

    githubUrl: "https://github.com/juliapalmacunha/Keychain-ERP",
  },

  {
    id: "delivery-burguer",

    name: "Delivery Burguer",

    text: "Food delivery platform with an online menu, shopping cart, and WhatsApp-based checkout experience.",

    technologies: ["JavaScript", "HTML", "Tailwind CSS"],

    image: "/public/delivery.png",

    siteUrl: "https://projeto-delivery-pi.vercel.app/",

    githubUrl: "https://github.com/juliapalmacunha/Projeto-delivery",
  },

  {
    id: "jogo-educativo",

    name: "Educational Game",

    text: "Interactive game designed to help children learn English through positive feedback and animal pronunciation practice.",

    technologies: ["JavaScript", "HTML", "CSS"],

    image: "/public/jogo.png",

    siteUrl: "https://jogo-educativo-sigma.vercel.app/",

    githubUrl: "https://github.com/juliapalmacunha/jogo-educativo",
  },
];

export const skills = [
  {
    title: "Front-end & UI",

    items: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },

      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },

      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },

      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },

      {
        name: "Material UI",
        icon: SiMui,
        color: "#007FFF",
      },
    ],
  },

  {
    title: "Back-end & Databases",

    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },

      {
        name: "Express",
        icon: SiExpress,
        color: "#EEEEEE",
      },

      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },

      {
        name: "Prisma ORM",
        icon: SiPrisma,
        color: "#FFFFFF",
      },
    ],
  },

  {
    title: "Engineering & Quality",

    items: [
      {
        name: "Git & GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },

      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF",
      },

      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },

      {
        name: "Jest",
        icon: SiJest,
        color: "#C21325",
      },
    ],
  },
];

export const descriptionSections = {
  projects:
    "Explore some of the projects I have built applying software engineering best practices, modern architecture, and scalable development approaches.",

  contact:
    "Feel free to reach out to discuss opportunities, projects, or potential collaborations.",
};

export const bestPractices = [
  "SOLID Principles",

  "Clean Code",

  "Automated Testing",

  "CI/CD Practices",

  "Component-driven Development",
];

export const titleSections = {
  about: "About",
  projects: "Projects",
  contact: "Contact",
};

export const portfolioData = {
  personalInfo,
  projects,
  skills,
  bestPractices,
  descriptionSections,
  titleSections,
};
