import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { IconType } from 'react-icons'
import * as S from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon: IconType
  children?: ReactNode
}

// export const Input: React.FC<InputProps> = (
//   { Icon, children, ...props },
//   ref,
// ) => {
//   return (
//     <S.InputContainer>
//       <Icon />
//       <input ref={ref} {...props} />
//       {children}
//     </S.InputContainer>
//   )
// }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function InputComponent({ Icon, children, ...props }, ref) {
    return (
      <S.InputContainer>
        <Icon />
        <input ref={ref} {...props} />
        {children}
      </S.InputContainer>
    )
  },
)
