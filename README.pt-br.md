# Julia Palma Cunha

<a href="./README.md"><img src="https://flagcdn.com/w20/us.png" alt="" width="16"> English</a>

**Desenvolvedora Full Stack** em Natal/RN · React, TypeScript, Node.js e PostgreSQL

Comecei a programar para resolver o controle de estoque da empresa da minha família. Esse sistema está em uso há mais de um ano e hoje tem uma IA que lê pedidos escritos à mão. Gosto de entender a regra de negócio antes de escolher a tecnologia.

[Portfólio](https://juliapalmacunha.vercel.app) · [LinkedIn](https://www.linkedin.com/in/julia-palma-cunha/) · [juliapcunnha@gmail.com](mailto:juliapcunnha@gmail.com)

---

### Agora

- **Desenvolvedora Front-end na STI · UFRN** (abr/2026 – atual): interfaces e componentes do novo portal da Superintendência de Relações Internacionais, com Vue.js, Nuxt, TypeScript e Pinia.
- **Antes, Front-end no Projeto Petrobras · IMD/UFRN** (set/2025 – abr/2026): primeiras telas do módulo de Manutenção de uma aplicação de monitoramento de ativos industriais, componentes compartilhados e relatórios de QA, com React, TypeScript, TanStack Query e Ant Design.
- Estudante de Ciências e Tecnologia na UFRN.

---

### Projetos

#### Keychain ERP · em uso, com IA

<img src="./public/keychain-erp-destaque.webp" alt="Talão escrito à mão virando rascunho de pedido pela IA" width="100%">

Sistema de gestão que desenvolvi sozinha para o negócio da minha família: catálogo, clientes, pedidos, estoque e faturamento. O leitor de pedidos com IA transforma a foto de um talão escrito à mão em rascunho de pedido. A IA só escolhe produtos e clientes cadastrados, marca as dúvidas, e nada é salvo sem revisão humana.

- 97,3% dos itens lidos corretamente em 10 talões reais (220 de 226), nenhum produto inventado
- 63% menos tempo de cadastro num teste inicial, a cerca de US$ 0,05 por talão
- Pedido e baixa de estoque gravados numa única transação

`React` `Firebase` `Material UI` `Claude API` `Vercel Functions` · [Demonstração](https://keychain-erp.vercel.app/)

#### Personal Finance App · full stack, em desenvolvimento

API REST com regras de negócio e dados isolados por usuário, autenticação JWT com renovação automática de sessão, testes de integração e CI.

- API em Node.js e Express, organizada em casos de uso, repositórios e factories (injeção de dependência)
- JWT com access e refresh token; no front, um interceptor do Axios renova a sessão e repete a requisição
- Testes de integração com Jest e Supertest, CI no GitHub Actions e ambiente com Docker

`Node.js` `Express` `PostgreSQL` `Prisma` `React` `TanStack Query` `Docker` · [API](https://github.com/juliapalmacunha/finance-app-api) · [Interface](https://github.com/juliapalmacunha/portofinance)

---

### Tecnologias

- **Front-end:** React, TypeScript, Vue.js, Nuxt, Tailwind CSS, Material UI, shadcn/ui, TanStack Query
- **Back-end e dados:** Node.js, Express, APIs REST, PostgreSQL, Prisma, Firebase
- **Qualidade:** Git, GitHub Actions, Docker, Jest, Supertest
- **IA:** integração de LLMs, prompt engineering, avaliação com casos de teste, Python (básico)

---

<sub>Este repositório também é o código do meu portfólio (React, Vite e Tailwind).</sub>