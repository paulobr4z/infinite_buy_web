import { BsCart4 } from 'react-icons/Bs'
import * as S from './styled'
import { Button } from '../Button'

export const Header = () => {
  return (
    <S.Header>
      <div className="container">
        <S.Logo>
          <img src="logo-02.png" alt="Logo" />
        </S.Logo>

        <S.Pesquisa>
          <input type="text" />
          <Button size="small">Buscar</Button>
        </S.Pesquisa>

        <S.Cart>
          <BsCart4 />
          <span>5</span>
        </S.Cart>
      </div>
    </S.Header>
  )
}
