import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    outline: 0;

    font-family: sans-serif;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  /* add custom scrollbar in global project 👇🏼👇🏼👻 */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #1d1e1f;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(178.8deg, #da0812 47.41%, #a6060d 65.18%, #730409 90.84%);
    border-radius: 20px;
  }

  /* Cor do Texto selecionado 👇🏼👇🏼👻 */
  ::-moz-selection {
    color: #ffff;
    background: #da0812;
  }

  ::selection {
    color: #ffff;
    background: #da0812;
  }
`;

export default GlobalStyles;
