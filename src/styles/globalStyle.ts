import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`


* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }
    html {
        font-size: 62.5%;
    }
    html, body {
        height: 100%;
    }
    body {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a, button {
    cursor: revert;
}

ol, ul, menu {
    list-style: none;
}

img {
    max-width: 100%;
}

::placeholder {
    color: unset;
}





`;
