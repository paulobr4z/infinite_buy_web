import { AuthProvider } from './AuthContext'
import { CartProvider } from './CartContext'
import { ProductsProvider } from './ProductsContext'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </AuthProvider>
  )
}
