import { BsCart4 } from 'react-icons/Bs'
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

          <S.Cart>
            <BsCart4 />
            <span>5</span>
          </S.Cart>
        </S.ContentHeader>
        <S.ContentSubMenu>
          <SubMenu />
        </S.ContentSubMenu>
      </div>
    </S.Header>
  )
}
