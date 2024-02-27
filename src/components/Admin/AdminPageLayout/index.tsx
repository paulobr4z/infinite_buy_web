import { AdminNavBar } from '../AdminNavBar'
import * as S from '../AdminPageLayout/styled'
import { AdminSideBar } from '../AdminSideBar'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { items } from '../AdminSideBarList/items'

export const AdminPageLayout = () => {
  const [selectedItem, setSelectedItem] = useState('')
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname
    const selectedItem =
      items.find((item) => item.to === currentPath)?.name || 'Dashboard'
    setSelectedItem(selectedItem)
  }, [location])

  const openSideBar = () => {
    setSideBarOpen(true)
  }
  const closeSideBar = () => {
    setSideBarOpen(false)
  }

  return (
    <S.AdminContainer role="navigation">
      <AdminSideBar
        onItemSelected={setSelectedItem}
        isOpen={sideBarOpen}
        closeSideBar={closeSideBar}
      />
      <AdminNavBar
        selectedItem={selectedItem}
        openSideBar={openSideBar}
        sideBarOpen={sideBarOpen}
        closeSideBar={closeSideBar}
      />
    </S.AdminContainer>
  )
}
