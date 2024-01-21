import { styled } from 'styled-components'
import { TabletBreakPoint } from '../../const/breackPoint'

export interface InputContainerProps {
  size: 'medium' | 'large'
}

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1.6rem;
  padding: 1.8rem 2.6rem;
  font-size: ${({ theme }) => theme.fonts.text.large};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  display: flex;
  gap: 0.8rem;
  max-width: 48rem;

  input {
    border: none;
    flex: 1;
    color: ${({ theme }) => theme.colors.text.secondaryAccent};
    background-color: transparent;
    max-width: 48rem;

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

  @media (max-width: ${TabletBreakPoint}) {
    width: ${({ size }) => (size === 'medium' ? '138px' : '249px')};
    padding: 12px 26px;
  }
`
