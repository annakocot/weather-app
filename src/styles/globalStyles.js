import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({theme}) => theme.background};
    font-family: 'sans-serif', 'Montserrat';
    color: ${({theme}) => theme.onBackground};
  }
  h1, h2, h3, h4 {
    font-family: 'PT Sans Narrow', 'sans-serif';
  }
`;
