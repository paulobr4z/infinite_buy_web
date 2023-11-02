import { RxHamburgerMenu } from 'react-icons/Rx'
import * as S from './styled'

export const SubMenu = () => {
  return (
    <S.Nav>
      <S.Lista>
        <li>
          <RxHamburgerMenu />
          Ver todas categorias
        </li>
        <li>Ofertas</li>
        <li>Hortfruti</li>
        <li>Açougue</li>
        <li>Bebidas</li>
        <li>Favoritos</li>
      </S.Lista>
    </S.Nav>
  )
}
