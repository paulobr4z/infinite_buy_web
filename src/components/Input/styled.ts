import { styled } from 'styled-components'

export const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 18px 26px;
  font-size: ${({ theme }) => theme.fonts.text.large};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  display: flex;
  gap: 8px;
  width: 480px;

  input {
    border: none;
    flex: 1;
    color: ${({ theme }) => theme.colors.text.secondaryAccent};
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &:placeholder-shown {
      opacity: 0.3;
      background-color: transparent;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.text.secondaryAccent};
    opacity: 0.3;
  }
`
