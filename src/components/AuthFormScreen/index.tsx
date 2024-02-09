import { ContentWrapper } from './styled'
import { Outlet } from 'react-router-dom'

export const AuthFormScreen = () => {
  return (
    <ContentWrapper>
      <section className="logo">
        <picture>
          <source srcSet="/logo-01.svg" media="(min-width: 1024px)" />
          <img src="/logo-02.png" alt="Imagem da logo" />
        </picture>
      </section>

      <section>
        <Outlet />
      </section>
    </ContentWrapper>
  )
}
