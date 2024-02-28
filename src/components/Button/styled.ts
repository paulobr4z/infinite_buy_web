import { styled } from 'styled-components'
import { sizeToPadding } from '../../const/sizes'
import { ButtonContainerProps } from '../../types'

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 0.375rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  font-size: ${({ theme }) => theme.fonts.text.small};
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ size }) => sizeToPadding[size] || '0.8rem 1.6rem'};
  width: 100%;
  transition: 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.button.disabled};
  }
`
