import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

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
      }
    }
  `}
`

export default GlobalStyles