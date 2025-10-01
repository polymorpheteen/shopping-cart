import { createGlobalStyle } from 'styled-components';
import MerriweatherItalic from '../assets/font/Merriweather-Italic-VariableFont_opsz,wdth,wght.ttf';
import MerriweatherRegular from '../assets/font/Merriweather-VariableFont_opsz,wdth,wght.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Merriweather';
        src: url(${MerriweatherRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Merriweather';
        src: url(${MerriweatherItalic}) format('truetype');
        font-weight: normal;
        font-style: italic;
    }

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
        font-family: 'Lato', sans-serif;
    }

    h1, h2, h3 {
        font-family: 'Merriweather', sans-serif;
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;

export default GlobalStyle;
