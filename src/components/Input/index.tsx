import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { IconType } from 'react-icons'
import * as S from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon: IconType
  children?: ReactNode
  iconRight?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function InputComponent({ Icon, children, iconRight, ...props }, ref) {
    return (
      <S.InputContainer size={'large'}>
        <Icon />
        <input ref={ref} {...props} />
        {iconRight && iconRight}
        {children}
      </S.InputContainer>
    )
  },
)
