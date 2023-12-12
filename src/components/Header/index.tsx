import { PiShoppingCartFill } from 'react-icons/pi'
import * as S from './styled'
import { Button } from '../Button'
import { SubMenu } from '../SubMenu'
import { Search } from '../Search'

export const Header = () => {
  return (
    <S.Header>
      <div className="container">
        <S.ContentHeader>
          <S.Logo>
            <img src="logo-02.png" alt="Logo" />
          </S.Logo>

          <Search />

          <Button size="small">Entrar</Button>

          <S.Cart>
            <PiShoppingCartFill />
            <S.NumberContentCart>
              <span>5</span>
            </S.NumberContentCart>
          </S.Cart>
        </S.ContentHeader>
        <S.ContentSubMenu>
          <SubMenu />
        </S.ContentSubMenu>
      </div>
    </S.Header>
  )
}
