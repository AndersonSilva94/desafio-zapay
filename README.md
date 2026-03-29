# Desafio Zapay (Front-End) :rocket:

![GitHub repo size](https://img.shields.io/github/repo-size/AndersonSilva94/desafio-zapay?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/AndersonSilva94/desafio-zapay?style=for-the-badge)

- Projeto desenvolvido durante o processo seletivo da Zapay

## Sobre

![Captura de tela de 2022-01-15 08-25-37](https://user-images.githubusercontent.com/52717632/149621763-7fe827bf-2f4b-425f-835b-6b1fa39cec96.jpg)

> O projeto consiste na criação de uma aplicação que consulta a api de [SpaceX](https://github.com/r-spacex/SpaceX-API/tree/master/docs) e busca os dados de Último Lançamento, Próximo Lançamento, Lançamentos Passados e Próximos Lançamentos. Foram criadas três páginas, e para navegar entre elas, basta clicar nos seus respectivos botões no menu superior. Na 'Home' encontram-se os dados do Último Lançamento e Próximo Lançamento. Na página 'Lançamentos Passados' encontram-se os dados de todos os últimos lançamentos realizados. Na página 'Próximos Lançamentos' encontram-se os dados dos lançamentos por vir.

> Também é possível ver a aplicação em sua versão mobile (em resoluções de 414px * 736px, por exemplo).

> PS: É possível clicar nas legendas das imagens e ver mais informações sobre o lançamento correspondente.

## Tecnologias utilizadas na construção do projeto

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Styled-Components](https://styled-components.com/)
- [Axios](https://axios-http.com/docs/example)
- [Vitest](https://vitest.dev/) (testes)
- [ESLint](https://eslint.org/)

## Pré-requisitos

Ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/) (recomendado: LTS atual)

## Para rodar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/AndersonSilva94/desafio-zapay.git
   ```

2. Entre na pasta do repositório:

   ```bash
   cd desafio-zapay
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Rode a aplicação em desenvolvimento:

   ```bash
   npm start
   ```

   A URL padrão é `http://localhost:3000/` (porta configurada no Vite).

5. Build de produção:

   ```bash
   npm run build
   ```

   Os arquivos são gerados na pasta `build/`.

6. Pré-visualizar o build:

   ```bash
   npm run preview
   ```

7. Testes:

   ```bash
   npm test
   ```

   Cobertura (execução única):

   ```bash
   npm run test-coverage
   ```

---

:keyboard: com :purple_heart: por [Anderson Silva (Andy)](https://www.linkedin.com/in/andssilva/) 😊
