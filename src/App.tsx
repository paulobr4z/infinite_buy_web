import { CartProvider } from './context/ContextCart'
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
