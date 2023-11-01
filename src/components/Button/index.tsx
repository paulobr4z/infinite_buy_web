import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styled'
import { CircularSpinner } from '../CircularSpinner'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  loading?: boolean
}

export const Button = ({ children, size, loading, ...props }: ButtonProps) => {
  return (
    <ButtonContainer size={size} {...props}>
      {loading ? <CircularSpinner /> : children}
    </ButtonContainer>
  )
}
