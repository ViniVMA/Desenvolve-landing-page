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


button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  margin: 0; /* 2 */
  border: none;
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;;
}





`;
