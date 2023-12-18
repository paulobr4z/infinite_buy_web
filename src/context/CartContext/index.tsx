import React, { createContext, useState, ReactNode } from 'react'
import { ProductsProps } from '../../types'

interface Product extends ProductsProps {
  qtd: number
}

interface CartContextProps {
  productsCart: Product[]
  addProductToCart: (id: string) => void
  removeProductFromCart: (id: string) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productsCart, setProductsCart] = useState<Product[]>([])

  const addProductToCart = (_id: string): void => {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find((product) => product._id === _id)

    if (!item) {
      const productToAdd: Product = {
        _id,
        amount: 0,
        name: '',
        images: '',
        price: 0,
        description: '',
        discount: 0,
        qtd: 1,
      }

      copyProductsCart.push(productToAdd)
    } else {
      item.qtd = item.qtd + 1
    }

    setProductsCart(copyProductsCart)
  }

  const removeProductFromCart = (_id: string): void => {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find((product) => product._id === _id)

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1
      setProductsCart(copyProductsCart)
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product._id !== _id,
      )
      setProductsCart(arrayFiltered)
    }
  }

  const clearCart = (): void => {
    setProductsCart([])
  }

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProductToCart,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
