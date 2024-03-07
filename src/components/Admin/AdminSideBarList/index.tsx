import { AdminSideBarItem } from '../AdminSideBarItem'
import * as S from './styled'
import { items } from './items'
import { useCallback } from 'react'

interface AdminSideBarListProps {
  onItemSelected: (item: string) => void
  closeSideBar: () => void
}

export const AdminSideBarList = ({
  onItemSelected,
  closeSideBar,
}: AdminSideBarListProps) => {
  const handleClick = useCallback(
    (item: string) => {
      onItemSelected(item)
      closeSideBar()
    },
    [onItemSelected, closeSideBar],
  )
  return (
    <S.AdminSideBarList role="navigation">
      {items.map((item) => (
        <AdminSideBarItem
          key={item.id}
          {...item}
          onClick={() => handleClick(item.name)}
          aria-label={`Ir para ${item.name}`}
        />
      ))}
    </S.AdminSideBarList>
  )
}
