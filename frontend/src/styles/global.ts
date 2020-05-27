import { createGlobalStyle } from "styled-components";

import ball from "../assets/ball.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #121212;
    height: 100%;
    background-image: url(${ball});
    background-repeat: repeat;
    cursor: default;
  }

  body, input, button {
    font: 16px Montserrat, sans-serif;
    color: #b3b3b3;
    line-height: 20px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 100%, 0.3);
  }
`;
