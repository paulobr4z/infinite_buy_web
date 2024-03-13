import { styled } from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 52px;
  background-color: ${({ theme }) => theme.colors.cultured};

  main {
    width: 100%;
    max-width: 1200px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
  }
`
