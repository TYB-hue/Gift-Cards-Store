import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #003087;
  }

  a {
    color: #FFCC00;
    text-decoration: none;
  }

  a:hover {
    color: #003087;
  }
`;

export default GlobalStyle;
