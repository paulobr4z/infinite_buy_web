import { styled } from 'styled-components'

interface ButtonContainerProps {
  size: 'small' | 'medium' | 'large'
}

const sizeToPadding = {
  small: '8px 16px',
  medium: '8px 32px',
  large: '16px 0',
}

const sizeToWidth = {
  small: 'auto',
  medium: '195px',
  large: '480px',
}
// TODO mudar px para rem

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 4px;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  font-size: ${({ theme }) => theme.fonts.text.small};
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ size }) => sizeToPadding[size] || '8px 16px'};
  width: ${({ size }) => sizeToWidth[size] || 'auto'};
  transition: 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.button.disabled};
  }
`
