import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { IconType } from 'react-icons'
import * as S from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon: IconType
  children?: ReactNode
  iconRight?: ReactNode
  title?: string
}

export const ProfileInput = forwardRef<HTMLInputElement, InputProps>(
  function InputComponent(
    { children, iconRight, title = 'title', ...props },
    ref,
  ) {
    return (
      <S.InputContainer size={'large'}>
        <label>{title}</label>
        <span>
          <input ref={ref} {...props} />
          {iconRight && iconRight}
          {children}
        </span>
      </S.InputContainer>
    )
  },
)
