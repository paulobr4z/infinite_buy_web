import { styled } from 'styled-components'
import { TabletBreakPoint } from '../../const/breakPoint'
import { InputContainerProps } from '../../types'

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.375rem;
  padding: 1.125rem 1.625rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  display: flex;
  gap: 0.5rem;
  width: 100%;

  input {
    font-size: ${({ theme }) => theme.fonts.text.medium};
    padding-left: 0.125rem;
    border: none;
    flex: 1;
    color: ${({ theme }) => theme.colors.text.secondaryAccent};
    background-color: transparent;

    width: 100%;

    &:focus {
      outline: none;
    }

    &:placeholder-shown {
      background-color: transparent;
      opacity: 0.3;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.text.secondaryAccent};
    opacity: 0.3;
    height: 1.5rem;
    width: 1.5rem;
  }

  @media (max-width: ${TabletBreakPoint}) {
    width: ${({ size }) => (size === 'medium' ? '480px' : '327px')};
    padding: 1rem 1.5rem;
  }
`
