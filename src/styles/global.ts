import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap'); */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Ubuntu", sans-serif;
    color: white;

    a{
      text-decoration: none;
    }

    button{
      border: 0;
      cursor: pointer;
    }

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${() => css`
    html {
      font-size: 62.5%;
    }

    .Toastify__toast-container {
      z-index: 9999999999999;
    }

    .Toastify__toast-body {
      > div:last-of-type {
        font-size: 1.4rem;
        color: black;
      }
    }
  `}
`;

export default GlobalStyles;
