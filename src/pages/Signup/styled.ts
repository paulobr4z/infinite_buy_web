import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;

  h2 {
    color: ${({ theme }) => theme.colors.text.primaryAccent};
    font-size: 36px;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  p {
    color: ${({ theme }) => theme.colors.text.primaryAccent};
    font-size: ${({ theme }) => theme.fonts.text.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.text.medium};
    font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
    cursor: pointer;
  }
`
