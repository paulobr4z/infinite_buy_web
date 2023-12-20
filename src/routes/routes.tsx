import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '.'
import { Signup } from '../pages/Signup'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'

export const InfinitBuyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}