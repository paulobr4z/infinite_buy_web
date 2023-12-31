import { Banner } from './components/Banner'
import { CardContainer } from './components/CardContainer'
import { MainLayout } from './components/MainLayout'
import { CartProvider } from './context/ContextCart'

export const App = () => {
  return (
    <>
      <CartProvider>
        <MainLayout>
          <Banner />
          <CardContainer />
        </MainLayout>
      </CartProvider>
    </>
  )
}
