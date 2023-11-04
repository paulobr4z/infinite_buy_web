import { Button } from '../Button'
import * as S from './styled'

export const Search = () => {
  return (
    <S.SearchInput>
      <input type="search" placeholder="Pesquise por produtos e ou marcas" />
      <S.ButtonSearch>Buscar</S.ButtonSearch>
    </S.SearchInput>
  )
}
