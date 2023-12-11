// import { Header } from '../Header'
import { Footer } from '../Footer'
import { ReactNode } from 'react'
import * as S from './styled'
import { ResponsiveHeader } from '../Header/ResponsiveHeader'
import { Header } from '../Header'
import { useMediaQuery } from 'react-responsive'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  return (
    <S.MainLayoutWrapper>
      {isDesktopOrLaptop ? <Header /> : <ResponsiveHeader />}

      {children}
      <Footer />
    </S.MainLayoutWrapper>
  )
}
