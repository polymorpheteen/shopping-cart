import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    }

   html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

  
    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
        font-family: 'Andika', sans-serif;
    }

    h1, h2, h3, h4 {
        font-family: "Noto Sans", sans-serif;
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;

export default GlobalStyle;
