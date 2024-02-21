import * as S from '../AdminPageLayout/styled'
import { AdminSideBar } from '../AdminSideBar'
import { useState } from 'react'

export const AdminPageLayout = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard')

  return (
    <S.AdminContainer>
      <AdminSideBar onItemSelected={setSelectedItem} />
    </S.AdminContainer>
  )
}
