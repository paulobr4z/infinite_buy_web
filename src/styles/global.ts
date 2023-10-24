import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    background-color: #f5f5f5;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
