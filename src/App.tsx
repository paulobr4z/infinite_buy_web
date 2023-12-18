import { Banner } from './components/Banner'
import { CardContainer } from './components/CardContainer'
import { Cart } from './components/Cart'
import { MainLayout } from './components/MainLayout'
import { CartProvider } from './context/CartContext'

export const App = () => {
  return (
    <>
      <CartProvider>
        <MainLayout>
          <Cart />
          <Banner />
          <CardContainer />
        </MainLayout>
      </CartProvider>
    </>
  )
}
