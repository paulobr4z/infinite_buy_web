import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styled'
import { CircularSpinner } from '../CircularSpinner'
// import { IconType } from 'react-icons'

// TODO Verificar e apagar o icon

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  loading?: boolean
  // Icon: IconType
}

export const Button = ({
  children,
  size,
  loading,
  // Icon,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer size={size} {...props}>
      {loading ? <CircularSpinner /> : children}
    </ButtonContainer>
  )
}
