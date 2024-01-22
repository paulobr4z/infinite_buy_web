import React, { createContext, useState, ReactNode, useEffect } from 'react'
import { ProductsProps } from '../../types'

interface CartContextProps {
  productsCart: ProductsProps[]
  addProductToCart: (product: ProductsProps) => void
  removeProductFromCart: (id: string) => void
  clearCart: () => void
  incrementProductQuantity: (id: string) => void
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productsCart, setProductsCart] = useState<ProductsProps[]>(
    JSON.parse(localStorage.getItem('cart') || '[]'),
  )

  const updateLocalStorage = (cart: ProductsProps[]): void => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const addProductToCart = (product: ProductsProps): void => {
    const copyProductsCart = [...productsCart]
    const item = copyProductsCart.find((p) => p._id === product._id)

    if (!item) {
      copyProductsCart.push({ ...product, amount: 1 })
    } else {
      item.amount = item.amount + 1
    }

    setProductsCart(copyProductsCart)
    updateLocalStorage(copyProductsCart)
  }

  const removeProductFromCart = (id: string): void => {
    const copyProductsCart = [...productsCart]
    const itemIndex = copyProductsCart.findIndex(
      (product) => product._id === id,
    )

    if (itemIndex !== -1) {
      if (copyProductsCart[itemIndex].amount > 1) {
        copyProductsCart[itemIndex].amount -= 1
      } else {
        copyProductsCart.splice(itemIndex, 1)
      }

      setProductsCart([...copyProductsCart])
      updateLocalStorage(copyProductsCart)
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
    }

    setProductsCart(copyProductsCart)
    updateLocalStorage(copyProductsCart)
  }

  useEffect(() => {
    setProductsCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [])

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
