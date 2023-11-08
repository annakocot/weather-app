import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({theme}) => theme.surface};
    font-family: 'sans-serif', 'Montserrat';
  }
  h1, h2, h3, h4 {
    font-family: 'PT Sans Narrow', 'sans-serif';
  }
`;
