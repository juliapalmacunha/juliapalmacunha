# Julia Palma Cunha

<a href="./README.pt-br.md"><img src="https://flagcdn.com/w20/br.png" alt="" width="16"> Português</a>

**Full Stack Developer** in Natal, Brazil · React, TypeScript, Node.js and PostgreSQL

I started programming to fix inventory control at my family's business. That system has been in use for over a year and now has an AI that reads handwritten orders. I like to understand the business rules before choosing the technology.

[Portfolio](https://juliapalmacunha.vercel.app) · [LinkedIn](https://www.linkedin.com/in/julia-palma-cunha/) · [juliapcunnha@gmail.com](mailto:juliapcunnha@gmail.com)

---

### Now

- **Front-end Developer at STI · UFRN** (Apr 2026 – present): interfaces and components for the new portal of UFRN's International Relations Office, with Vue.js, Nuxt, TypeScript and Pinia.
- **Previously, Front-end Developer on the Petrobras Project · IMD/UFRN** (Sep 2025 – Apr 2026): first screens of the Maintenance module of an industrial asset monitoring application, shared components and QA reports, with React, TypeScript, TanStack Query and Ant Design.
- Science and Technology student at UFRN.

---

### Projects

#### Keychain ERP · in use, with AI

<img src="./public/keychain-erp-destaque.webp" alt="Handwritten order slip turned into an AI draft order" width="100%">

A management system I built on my own for my family's business: catalog, customers, orders, inventory and revenue. The AI order reader turns a photo of a handwritten order slip into a draft order. The AI can only choose registered products and customers, flags its doubts, and nothing is saved without human review.

- 97.3% of items read correctly across 10 real slips (220 of 226), no invented products
- 63% less order entry time in an initial test, at about US$0.05 per slip
- Each order and its stock deduction are saved in a single transaction

`React` `Firebase` `Material UI` `Claude API` `Vercel Functions` · [Demo](https://keychain-erp.vercel.app/)

#### Personal Finance App · full stack, in progress

A REST API with business rules and per-user data isolation, JWT authentication with automatic session renewal, integration tests and CI.

- Node.js and Express API organized into use cases, repositories and factories (dependency injection)
- JWT with access and refresh tokens; on the front end, an Axios interceptor renews the session and retries the request
- Integration tests with Jest and Supertest, CI on GitHub Actions and a Docker environment

`Node.js` `Express` `PostgreSQL` `Prisma` `React` `TanStack Query` `Docker` · [API](https://github.com/juliapalmacunha/finance-app-api) · [Interface](https://github.com/juliapalmacunha/portofinance)

---

### Technologies

- **Front end:** React, TypeScript, Vue.js, Nuxt, Tailwind CSS, Material UI, shadcn/ui, TanStack Query
- **Back end & data:** Node.js, Express, REST APIs, PostgreSQL, Prisma, Firebase
- **Quality:** Git, GitHub Actions, Docker, Jest, Supertest
- **AI:** LLM integration, prompt engineering, evaluation with test cases, Python (basic)

---

<sub>This repository is also the source code of my portfolio (React, Vite and Tailwind).</sub>