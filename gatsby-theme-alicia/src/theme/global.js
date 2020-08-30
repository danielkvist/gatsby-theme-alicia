import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.color.alpha};
    color: ${(props) => props.theme.color.black};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: ${(props) => props.theme.fontSize.text};
    height: 100vh;
    line-height: ${(props) => props.theme.lineHeight.text};
  }

  h1,
  h2,
  h3 {
    line-height: ${(props) => props.theme.lineHeight.title};
    margin: 0;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.h1}
  }
`;

export default GlobalStyle;
