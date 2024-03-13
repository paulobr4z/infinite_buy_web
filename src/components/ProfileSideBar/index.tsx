import { PiMapPin, PiShoppingCart, PiUser } from 'react-icons/pi'

import * as S from './styled'

export function ProfileSideBar() {
  return (
    <S.SideBarContainer>
      <header>
        <img src="http://github.com/paulobr4z.png" alt="avatar" />
        <p>Olá, Paulo Braz</p>
      </header>
      <ul>
        <li className="selected">
          <PiUser size={26} />
          <p>Dados</p>
        </li>
        <li>
          <PiMapPin size={26} />
          <p>Endereço</p>
        </li>
        <li>
          <PiShoppingCart size={26} />
          <p>Pedido</p>
        </li>
      </ul>
    </S.SideBarContainer>
  )
}
