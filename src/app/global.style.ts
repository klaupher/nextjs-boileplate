import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    html, body, #__next {
      height: 100%;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    :root {
        --bg: #fff;
        --fg: navy;

        --headingcolor: #6767b3;

        --primary-button-bgcolor: #f26828;
        --primary-button-hovercolor: #f69f77;
        --primary-button-textcolor: #efebeb;

        --secondary-button-bgcolor: #121212;
        --secondary-button-hovercolor: #6a6666;
        --secondary-button-textcolor: #ffffff;
    }

    [data-theme="dark"] {
        --bg: #442e1a;
        --fg: #fff;

        --headingcolor: #eded1b;

        --primary-button-bgcolor: #F59E0B;
        --primary-button-hovercolor: #f1af3d;
        --primary-button-textcolor: #121212;

        --secondary-button-bgcolor: #ffffff;
        --secondary-button-hovercolor: #fafafa;
        --secondary-button-textcolor: #121212;
    }

    [data-theme='dark'] [data-hide-on-theme='dark'],
    [data-theme='light'] [data-hide-on-theme='light'] {
        display: none;
    }
`
export default GlobalStyle