import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { ProductsProps } from '../../types'

interface CartProduct extends ProductsProps {
  amount: number
}

interface CartContextProps {
  productsCart: CartProduct[]
  addProductToCart: (product: ProductsProps) => void
  removeProductFromCart: (id: string) => void
  clearCart: () => void
  incrementProductQuantity: (id: string) => void
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productsCart, setProductsCart] = useState<CartProduct[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setProductsCart(JSON.parse(storedCart))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(productsCart))
  }, [productsCart])

  const addProductToCart = (product: ProductsProps): void => {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find((p) => p._id === product._id)

    if (!item) {
      copyProductsCart.push({ ...product, amount: 1 })
    } else {
      item.amount = item.amount + 1
    }

    setProductsCart(copyProductsCart)
  }

  const removeProductFromCart = (id: string): void => {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find((product) => product._id === id)

    if (item && item.amount > 1) {
      item.amount = item.amount - 1
      setProductsCart(copyProductsCart)
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product._id !== id,
      )
      setProductsCart(arrayFiltered)
    }
  }

  const clearCart = (): void => {
    setProductsCart([])
  }

  const incrementProductQuantity = (id: string): void => {
    const copyProductsCart = [...productsCart]
    const item = copyProductsCart.find((product) => product._id === id)

    if (item) {
      item.amount = item.amount + 1
      setProductsCart(copyProductsCart)
    }
  }

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        incrementProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
