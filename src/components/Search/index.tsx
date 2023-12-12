import * as S from './styled'
import { BiSearchAlt } from 'react-icons/bi'

export const Search = () => {
  return (
    <S.SearchInput>
      <input type="text" placeholder="Pesquise por produtos e ou marcas" />
      <BiSearchAlt />
    </S.SearchInput>
  )
}
