import { Outlet } from 'react-router-dom'
import * as S from './styled'
import { useAuthContext } from '../../../context/AuthContext'
import { ButtonCategorie } from '../../ButtonCategorie'

interface AdminNavBarProps {
  selectedItem: string
  openSideBar: () => void
  sideBarOpen: boolean
  closeSideBar: () => void
}

export const AdminNavBar = ({
  selectedItem,
  openSideBar,
  sideBarOpen,
  closeSideBar,
}: AdminNavBarProps) => {
  const { user } = useAuthContext()
  return (
    <S.AdminNavBarContainer>
      <S.Overlay isOpen={sideBarOpen} onClick={closeSideBar} />
      <S.AdminNavBarHeader>
        <ButtonCategorie
          size="small"
          onClick={() => openSideBar()}
          aria-label="Menu administrativo"
        >
          <S.StyledHamburgerMenu />
        </ButtonCategorie>
        <S.AdminNavBarTitle>{selectedItem}</S.AdminNavBarTitle>
        <S.AdminNavBarUser>
          <S.AdminNavBarNameUser>{user?.name}</S.AdminNavBarNameUser>
          <S.AdminNavBarImageUser src={'/icon-user.png'} />
        </S.AdminNavBarUser>
      </S.AdminNavBarHeader>
      <S.AdminNavBarContent>
        <Outlet />
      </S.AdminNavBarContent>
    </S.AdminNavBarContainer>
  )
}
