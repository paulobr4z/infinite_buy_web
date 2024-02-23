import styled from 'styled-components'
import { ButtonContainerProps } from '../../types'

export const ButtonCategorieConatiner = styled.button<ButtonContainerProps>`
  display: flex;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  font-size: ${({ theme }) => theme.fonts.text.small};
  border-bottom: 0.0625rem solid transparent;
  color: ${({ theme }) => theme.colors.button.disabled};
  transition: 0.3s ease-in-out;
  &:hover {
    border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.primary};
  }
`
