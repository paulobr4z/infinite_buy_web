import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-size: 62.5%;
  }



  html, body {
    width: 100%;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.white};
  }

  img {
  max-width: 90%;
  height: auto;
}

  .container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
  
  button {
    cursor: pointer;
    border: none;
    background-color: inherit;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
  ul {
    list-style-type: none;
  }
  
  ::-webkit-scrollbar {
    width: 1rem ;
  }

::-webkit-scrollbar-thumb {
width: 1rem ;
background-color: ${({ theme }) => theme.colors.black} ;
border-radius: 0.6rem;
}
`
