import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '.'
import { Signup } from '../pages/Signup'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { AuthFormScreen } from '../components/AuthFormScreen'
import { RecoverPassword } from '../pages/RecoverPassword'
import { useAuthContext } from '../context/AuthContext'
import { AdminPageLayout } from '../components/Admin/AdminPageLayout'

export const InfinitBuyRoutes = () => {
  const { isAuthenticated } = useAuthContext()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />
        <Route path={routes.home} element={<Home />} />

        <Route element={<AuthFormScreen />}>
          <Route
            path={routes.login}
            element={
              !isAuthenticated ? (
                <Login />
              ) : (
                <Navigate replace to={routes.home} />
              )
            }
          />
          <Route path={routes.signup} element={<Signup />} />
          <Route path={routes.recoverPassword} element={<RecoverPassword />} />
        </Route>
        <Route path={routes.admin} element={<AdminPageLayout />}>
          <Route index element={<Navigate to={routes.dashboard} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
