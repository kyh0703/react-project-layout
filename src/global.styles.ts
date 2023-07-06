import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0px 40px;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
}

a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
