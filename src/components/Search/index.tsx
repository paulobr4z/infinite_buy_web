import * as S from './styled'
import { BiSearchAlt } from 'react-icons/bi'

export const Search = () => {
  return (
    <S.SearchInput>
      <input type="text" placeholder="Em Produção" disabled />
      <BiSearchAlt />
    </S.SearchInput>
  )
}
