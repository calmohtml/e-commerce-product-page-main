import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // Main colors
    --orange: hsl(26, 100%, 55%);
    --paleOrange: hsl(25, 100%, 94%);
    // Secondary colors
    --veryDarkBlue: hsl(220, 13%, 13%);
    --darkGrayishBlue: hsl(219, 9%, 45%);
    --grayishBlue: hsl(220, 14%, 75%);
    --lightGrayishBlue: hsl(223, 64%, 98%);
    --white: hsl(0, 0%, 100%);
    --blackLightboxBackground: hsl(0, 0%, 0%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-weight: 400;
  }

  body {
    font-family: 'Kumbh Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  #root {
    margin: 0 auto;
    width: 90%;
  }
`;

export default GlobalStyles;
