import { CartProvider } from './context/CartContext'
import { InfinitBuyRoutes } from './routes/routes'

export const App = () => {
  return (
    <>
      <CartProvider>
        <InfinitBuyRoutes />
      </CartProvider>
    </>
  )
}
