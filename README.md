<h1 align="center">
  <img alt="Codify" src="https://ik.imagekit.io/hwyksvj4iv/codify_WZgmf2ZiU.svg" width="250px" />
</h1>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-iniciando-back-end">Node.js</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-iniciando-front-end">ReactJS</a>
</p>

<h1 align="center">
  
</h1>

## :page_with_curl: Sobre
Este repositório contém um API REST em Node.js como back-end, uma aplicação em ReactJS como front-end e um app mobile em React Native, todos utilizando TypeScript.

Essa é a aplicação GoBarber, que é uma plataforma de agendamento de serviços para proprietários de barbearias ou salões de beleza. Nessa aplicação o usuário consegue ter acesso a todos os prostadores de serviços cadastrados através de um aplicativo mobile, com isso usuário consegue escolher um prestador para marcar seu agendamento.

Já o prestador de serviço, através de um interface Web, consegue ter acesso a todos os seus horários, podendo ver todos os que estão ocupados quanto os que estão disponíveis.

**Node.js**: é uma API REST que faz todo o CRUD da aplicação, persistência de dados, tratativa de exceções e que serve dados tanto ao front-end quanto ao mobile.

**ReactJS**: é uma página Web no qual o prestador de serviço tem acesso a todo o seu calendário de agendamentos.

**React Native**: é um aplicativo em que o usuário tem acesso a todos os prestadores de serviço cadastrados no App, com isso ele pode fazer um agendamento que o prestador de preferência.

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter credências do Spotify.

## Credênciais do Spotify para rodar o projeto localmente

Para você poder rodar o projeto localmente na sua máquina é preciso ter uma [**conta de desenvolvedor no Spotify**](https://developer.spotify.com/dashboard/) (para criar essa conta é totalmente gratuito e pode usar sua própria conta do Spotify).

Com a conta criada basta clicar no botão **CREATE AN APP** e preencher os dados que forém pedidos.

Após isso você terá acesso ao Dashboard da sua aplicação. No lado esquerdo estará suas credênciais, Client ID e Client Secret que serão usuadas para prencher o arquivo .env do backend.

Por fim, no lado direito clique no botão **EDIT SETTINGS**. No modal que abrir haverá um compo chamado **Redirects URIs**, nele você irá preencher com a URL em que o seu backend estará rodando com a rota **/callback** (Ex: http://localhost:3333/callback). Após isso basta clicar em **SAVE**.

## :rocket: Começando
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/TwoDevsForDevs/codify

  # Entrar no diretório:
  $ cd codify
```

## :gear: Iniciando back-end
```bash
  # Entrar no diretório do back-end:
  $ cd backend

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn dev:server
```

## :computer: Iniciando front-end
```bash
  # Entrar no diretório do front-end:
  $ cd frontend

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn start
```

Feito com ❤️ por Matheus Pires 👋🏻 [Get in touch!](https://github.com/MatheusPires99)
