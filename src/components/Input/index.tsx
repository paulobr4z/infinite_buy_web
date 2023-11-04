import { InputHTMLAttributes, ReactNode } from 'react'
import { IconType } from 'react-icons'
import * as S from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon: IconType
  children?: ReactNode
}

export const Input: React.FC<InputProps> = ({ Icon, children, ...props }) => {
  return (
    <S.InputContainer>
      <Icon />
      <input {...props} />
      {children}
    </S.InputContainer>
  )
}
