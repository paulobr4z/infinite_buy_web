import { InputHTMLAttributes, ReactNode } from 'react'
import { IconType } from 'react-icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon: IconType
  children?: ReactNode
}

export const Input: React.FC<InputProps> = ({
  Icon,
  children,
  ...props
}) => {
  return (
    <div>
      <Icon />
      <input {...props} />
      {children}
    </div>
  )
}
