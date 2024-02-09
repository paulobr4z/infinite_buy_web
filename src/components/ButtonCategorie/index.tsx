import * as S from './styled'
import { ButtonCategorieProps } from '../../types'

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
