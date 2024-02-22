import { AdminSideBarItem } from '../AdminSideBarItem'
import * as S from './styled'
import { items } from './items'

interface AdminSideBarListProps {
  onItemSelected: (item: string) => void
}

export const AdminSideBarList = ({ onItemSelected }: AdminSideBarListProps) => {
  return (
    <S.AdminSideBarList>
      {items.map((item, index) => (
        <AdminSideBarItem
          key={index}
          {...item}
          onClick={() => onItemSelected(item.name)}
        />
      ))}
    </S.AdminSideBarList>
  )
}
