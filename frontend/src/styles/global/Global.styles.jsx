import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap'); */

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; //10px / 16px = 62.5% -> 1rem = 10px
    }

    body {
        font-family: 'Manrope', sans-serif;
        line-height: 1.6;
        background-color: ${({ theme }) => theme.colors.black.three};
    } 

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white.one};
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
