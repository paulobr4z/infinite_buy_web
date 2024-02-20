import * as S from './styled'
import logo from '../../../../public/logo-03.png'
import { AdminSideBarList } from '../AdminSideBarList'

type AdminSideBarProps = {
  onItemSelected: (item: string) => void
}

export const AdminSideBar = ({ onItemSelected }: AdminSideBarProps) => {
  return (
    <S.AdminSideBarConteiner>
      <S.AdminSideBarLogo image={logo} />
      <S.ItemsConteiner>
        <AdminSideBarList onItemSelected={onItemSelected} />
      </S.ItemsConteiner>
    </S.AdminSideBarConteiner>
  )
}
