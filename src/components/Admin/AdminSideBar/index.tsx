import * as S from './styled'
import { AdminSideBarList } from '../AdminSideBarList'

type AdminSideBarProps = {
  onItemSelected: (item: string) => void
}

export const AdminSideBar = ({ onItemSelected }: AdminSideBarProps) => {
  return (
    <S.AdminSideBarConteiner>
      <S.AdminSideBarLogo image={'/logo-03.png'} />
      <S.ItemsConteiner>
        <AdminSideBarList onItemSelected={onItemSelected} />
      </S.ItemsConteiner>
    </S.AdminSideBarConteiner>
  )
}
