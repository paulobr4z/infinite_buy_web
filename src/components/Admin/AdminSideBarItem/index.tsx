import * as S from './styled'
import { Link, useMatch } from 'react-router-dom'

interface AdminSideBarItemProps {
  name: string
  to: string
  onClick: (event: React.MouseEvent) => void
}

export const AdminSideBarItem = ({
  name,
  to,
  onClick,
}: AdminSideBarItemProps) => {
  const match = useMatch(to)
  return (
    <Link to={to} onClick={onClick}>
      <S.AdminSideBarItem className={match ? 'active' : ''} role="menuitem">
        {name}
      </S.AdminSideBarItem>
    </Link>
  )
}
