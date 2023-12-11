import styled from 'styled-components'
import { ButtonContainerProps } from '../Button/styled'

export const ButtonCategorieConatiner = styled.button<ButtonContainerProps>`
  display: flex;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  font-size: ${({ theme }) => theme.fonts.text.small};
  border-bottom: 1px solid transparent;
  color: ${({ theme }) => theme.colors.button.categorie};
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`
