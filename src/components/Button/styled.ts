import { styled } from 'styled-components'
import { TabletBreakPoint } from '../../const/breakPoint'
import { sizeToPadding, sizeToWidth } from '../../const/sizes'
import { ButtonContainerProps } from '../../types'

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 0.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  font-size: ${({ theme }) => theme.fonts.text.small};
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ size }) => sizeToPadding[size] || '0.8rem 1.6rem'};
  width: ${({ size }) => sizeToWidth[size] || 'auto'};
  transition: 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.button.disabled};
  }

  @media (max-width: ${TabletBreakPoint}) {
    width: ${({ size }) => (size === 'small' ? 'auto' : '100%')};
  }
`
