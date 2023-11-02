import { styled } from 'styled-components'

interface ButtonContainerProps {
  size: 'small' | 'medium' | 'large'
}

const sizeToPadding = {
  small: '0.8rem 1.6rem',
  medium: '0.8rem 3.2re,',
  large: '1.6rem 0',
}

const sizeToWidth = {
  small: 'auto',
  medium: '19.5rem',
  large: '48rem',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 0.4rem;
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
`
