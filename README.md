# Full Stack Restaurant CRUD (Back-End): Node.js, Express, Prisma, MongoDB, JWT, Docker.

<hr />

## 📃Conteúdos da Página:

-   [Sobre](#Sobre)
-   [Utilização](#Utilização)
-   [Instalação](#Instalação)
-   [Rotas](#Rotas)
-   [Desenvolvedor](#Desenvolvido-por)

## 📜Sobre

Este repositório é o resultado do desenvolvimento do Back-End de um desafio full stack, com o objetivo de criar um sistema para cadastro de restaurantes e horários de funcionamento. O foco principal foi construir uma API eficiente e escalável usando tecnologias modernas.

Além disso, foi utilizado o Swagger para documentar a API, garantindo uma melhor compreensão e facilitando a integração com outros desenvolvedores. A publicação do servidor AWS permite a disponibilização do sistema em uma infraestrutura confiável e escalável.

## 👩🏻‍💻Ultilização

A URL base da API é:

[http://18.228.138.40:3333](http://18.228.138.40:3333)

Para ter acesso as informações sobre todas as rotas da aplicação acesse:

[http://18.228.138.40:3333/api-docs/](http://18.228.138.40:3333/api-docs/)

## 💾Instalação

### Pré-requisitos:

- Node.js instalado (versão 12 ou superior)

### Passo 1: Configurando o ambiente de desenvolvimento

1. Clone o repositório do projeto em seu ambiente local:

```git clone https://github.com/m4chado/foodfinder-api.git```

2. Acesse a pasta do projeto:   

```cd foodfinder-api```

3. Instale as dependências do projeto:

```npm install```

### Passo 2: Configurando o banco de dados MongoDB

1. Certifique-se de ter o MongoDB instalado em seu sistema ou use um serviço de hospedagem em nuvem, como o MongoDB Atlas.

2. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente de arcordo com o arquivo `.env.example`.

### Passo 3: Configurando o Prisma

1. Execute os comandos abaixo para gerar os modelos e a API do Prisma:

```npx prisma generate```

```npx prisma db push```

### Passo 4: Executando o projeto: 

1. Inicie o servidor localmente:

```npm run dev```

2. Verifique se o servidor está funcionando acessando http://localhost:3333 no seu navegador. Você deve ver uma mensagem de "Server is up!".


## 🖥️Rotas 

A URL base da API é:

[http://18.228.138.40:3333](http://18.228.138.40:3333)

Para ter acesso as informações sobre todas as rotas da aplicação acesse:

[http://18.228.138.40:3333/api-docs/](http://18.228.138.40:3333/api-docs/)

## Desenvolvido por:

-   Enzo Machado [![github](https://img.shields.io/badge/github-6e5494?style=for-the-badge&logo=github&logoColor=white)](https://github.com/m4chado) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enzomachadodev/)
