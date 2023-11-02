import { ButtonHTMLAttributes } from 'react'
import * as S from './styled'
import { CircularSpinner } from '../CircularSpinner'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  loading?: boolean
  // TODO colocar o children como props
}

export const Button = ({
  children,
  size,
  loading,
  // Icon,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonContainer size={size} {...props}>
      {loading ? <CircularSpinner /> : children}
    </S.ButtonContainer>
  )
}
