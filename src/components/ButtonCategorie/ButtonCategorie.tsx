import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styled'

interface ButtonCategorieProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  color?: string
  loading?: boolean
  children?: ReactNode
}

export const ButtonCategorie = ({
  size,
  children,
  color,
  ...props
}: ButtonCategorieProps) => {
  return (
    <S.ButtonCategorieConatiner size={size} color={color} {...props}>
      {children}
    </S.ButtonCategorieConatiner>
  )
}
