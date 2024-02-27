import * as S from './styled'
import { AdminSideBarList } from '../AdminSideBarList'
interface AdminSideBarProps {
  onItemSelected: (item: string) => void
  isOpen: boolean
  closeSideBar: () => void
}

export const AdminSideBar = ({
  onItemSelected,
  isOpen,
  closeSideBar,
}: AdminSideBarProps) => {
  return (
    <S.AdminSideBarContainer isOpen={isOpen}>
      <S.SideBarCloseIcon
        onClick={closeSideBar}
        isOpen={isOpen}
        aria-label="Fechar menu"
      />
      <S.AdminSideBarLogo image={'/logo-03.png'} />

      <S.ItemsConteiner>
        <AdminSideBarList
          onItemSelected={onItemSelected}
          closeSideBar={closeSideBar}
        />
      </S.ItemsConteiner>
    </S.AdminSideBarContainer>
  )
}
