import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styled'
import { CircularSpinner } from '../CircularSpinner'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  loading?: boolean
  children?: ReactNode
}

export const Button = ({ children, size, loading, ...props }: ButtonProps) => {
  return (
    <S.ButtonContainer size={size} {...props}>
      {loading ? <CircularSpinner cor={'white'} /> : children}
    </S.ButtonContainer>
  )
}
