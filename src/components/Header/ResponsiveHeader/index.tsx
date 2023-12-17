import { PiShoppingCartFill } from 'react-icons/pi'
import * as S from './styled'
import { Search } from '../../Search'
import { RxHamburgerMenu } from 'react-icons/rx'
// import { RxCross2 } from "react-icons/rx";

export const ResponsiveHeader = () => {
  return (
    <S.Header>
      <div className="container">
        <div className="wrapper-menu">
          <S.ContentHeader>
            <RxHamburgerMenu size="28" />

            <S.Logo>
              <img src="logo-02.png" alt="Logo" />
            </S.Logo>

            <S.Cart>
              <PiShoppingCartFill />
              <S.NumberContentCart>
                <span>5</span>
              </S.NumberContentCart>
            </S.Cart>
          </S.ContentHeader>
        </div>

        <Search />

        {/* <Button size="small">Entrar</Button> */}
      </div>
    </S.Header>
  )
}
