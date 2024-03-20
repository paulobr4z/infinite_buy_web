import { styled } from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 3.25rem 0;
  background-color: ${({ theme }) => theme.colors.cultured};

  main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 75rem;
    height: 50rem;
  }

  .profileLeft {
    display: flex;
    flex-direction: column;
  }

  .profileRight {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 49.4375rem;
    padding-top: 4.875rem;

    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      padding-bottom: 1.5rem;
    }

    .myDataForm {
      padding: 40px;
      box-shadow: 0 0 4px 0 rgba(99, 99, 99, 0.2);
      border: 1px solid #dee2e6;
      border-radius: 0.625rem;
      background-color: #ffffff;
      height: 100%;

      p {
        font-size: 1.5rem;
        font-weight: 500;
        padding-bottom: 2.8125rem;
      }

      form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 2rem;
      }
    }
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
  }
`
