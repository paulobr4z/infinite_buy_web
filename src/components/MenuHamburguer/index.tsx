import { SideBar } from '../SideBar'
import * as S from './styled'

export const MenuHambuerguer = () => {
  return (
    <>
      <S.HeaderMenuHamburguer>
        <S.ContentMenu>
          <S.ContentInfo>
            <S.Person />
            <S.ContentDescriptions>
              <h3>Bem vindo!</h3>
              <p>
                <a href="#">Entre</a> ou <a href="#">Cadastre-se</a>
              </p>
            </S.ContentDescriptions>
          </S.ContentInfo>
          <S.ClosedIcon />
        </S.ContentMenu>
      </S.HeaderMenuHamburguer>
      <SideBar />
    </>
  )
}
