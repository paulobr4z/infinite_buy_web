import { RxHamburgerMenu } from 'react-icons/Rx'
import * as S from './styled'
import { ButtonCategorie } from '../ButtonCategorie/ButtonCategorie'

export const SubMenu = () => {
  return (
    <S.Nav>
      <S.Lista>
        <li>
          <ButtonCategorie size="small">
            <RxHamburgerMenu />
            Ver todas categorias
          </ButtonCategorie>
        </li>
        <li>
          <ButtonCategorie size="small">Ofertas</ButtonCategorie>
        </li>
        <li>
          <ButtonCategorie size="small">Hortfruti</ButtonCategorie>
        </li>
        <li>
          <ButtonCategorie size="small">Açougue</ButtonCategorie>
        </li>
        <li>
          <ButtonCategorie size="small">Bebidas</ButtonCategorie>
        </li>
        <li>
          <ButtonCategorie size="small">Favoritos</ButtonCategorie>
        </li>
      </S.Lista>
    </S.Nav>
  )
}
