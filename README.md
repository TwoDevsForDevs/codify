<h1 align="center">
  <img alt="Codify" src="https://ik.imagekit.io/hwyksvj4iv/codify_AKvByfygl.png" width="250px" />
  <h2 align="center">
    Uma forma incrível de você ter acesso a curiosidades da sua conta do Spotify! 🎧
  </h2>
  <p align="center">
      <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/TwoDevsForDevs/codify?color=1db954">
      <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/TwoDevsForDevs/codify?color=1db954">
      <img alt="Stars" src="https://img.shields.io/github/stars/TwoDevsForDevs/codify?color=1db954">
      <img alt="Repository Size" src="https://img.shields.io/github/repo-size/TwoDevsForDevs/codify?color=1db954">
  </p>
</h1>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-iniciando-back-end">Node.js</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-iniciando-front-end">ReactJS</a>
</p>

## :page_with_curl: Sobre
Codify é uma aplicação criada a partir do [**Spotify’s Web API**](https://developer.spotify.com/documentation/web-api/) para coletar informações de sua conta Spotify.

Nela o usuário tem acesso aos seus artistas mais escutados, músicas mais curtidas e suas playlists, dentre diversas outras curiosidades incríveis.

Nesse projeto tivemos como principal objetivo aprender a consumir uma API externa e estudar toda a documentação por trás dela. Além disso, no processo tivemos que estudar sobre a biblioteca de Audio do JavaScript para podermos tocar músicas.

**Node.js**: realiza todas as chamadas a API do Spotify e customizamos as respostas pra serem da forma que queremos. Serve todos os dados para o front-end.

**ReactJS**: é uma página Web no qual o usuário terá acesso a informações da sua conta do Spotify.

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
