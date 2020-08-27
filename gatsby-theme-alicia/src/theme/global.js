import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.color.charlie};
    background: ${(props) => `radial-gradient(
      circle at top right,
      ${props.theme.color.bravo}, transparent
      ),
      radial-gradient(
      circle at bottom left, 
      ${props.theme.color.alpha}, transparent
      )`};
    color: ${(props) => props.theme.color.black};
    font-family: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
    font-size: ${(props) => props.theme.fontSize.text};
    height: 100vh;
    line-height: ${(props) => props.theme.lineHeight.text};
    width: 100vw;
  }
  h1,
  h2,
  h3 {
    line-height: ${(props) => props.theme.lineHeight.title};
    margin: 0;
  }
`;

export default GlobalStyle;
