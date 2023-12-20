import { ContentWrapper } from './styled'
import { Outlet } from 'react-router-dom'

export const AuthFormScreen = () => {
  return (
    <ContentWrapper>
      <section className="logo">
        <img src="/logo-01.svg" alt="Imagem da logo" />
      </section>

      <section>
        <Outlet />
      </section>
    </ContentWrapper>
  )
}
