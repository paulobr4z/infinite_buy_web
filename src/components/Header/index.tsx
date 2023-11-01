import { BsCart4 } from 'react-icons/Bs'
import * as S from './styled'

export const Header = () => {
  return (
    <S.Header>
      <div className="container">
        <S.Logo>
          <img src="logo-02.png" alt="Logo" />
        </S.Logo>

        <S.Pesquisa>
          <input type="text" />
          <button>buscar</button>
        </S.Pesquisa>

        <S.Cart>
          <BsCart4 />
          <span>R$9,99</span>
        </S.Cart>
      </div>
    </S.Header>
  )
}
