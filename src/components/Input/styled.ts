import { styled } from 'styled-components'
import { TabletBreakPoint } from '../../const/breakPoint'

export interface InputContainerProps {
  size: 'medium' | 'large'
}

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.6rem;
  padding: 1.8rem 2.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  display: flex;
  gap: 0.8rem;
  width: 100%;

  input {
    font-size: ${({ theme }) => theme.fonts.text.medium};
    padding-left: 0.2rem;
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
    height: 2.4rem;
    width: 2.4rem;
  }

  @media (max-width: ${TabletBreakPoint}) {
    width: ${({ size }) => (size === 'medium' ? '480px' : '327px')};
    padding: 1.6rem 2.4rem;
  }
`
