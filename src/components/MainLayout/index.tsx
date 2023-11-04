import { Header } from '../Header'
import { Footer } from '../Footer'
import { ReactNode } from 'react'
import * as S from './styled'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.MainLayoutWrapper>
      <Header />
      {children}
      <Footer />
    </S.MainLayoutWrapper>
  )
}
