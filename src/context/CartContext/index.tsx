import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { ProductsProps } from '../../types'

interface Product extends ProductsProps {
  qtd: number
}

interface CartContextProps {
  productsCart: Product[]
  addProductToCart: (product: Product) => void
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
  const [productsCart, setProductsCart] = useState<Product[]>([])

  // Carrega os dados do carrinho do localStorage ao inicializar
  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setProductsCart(JSON.parse(storedCart))
    }
  }, []) // Executado apenas uma vez ao montar o componente

  // Salva os dados do carrinho no localStorage sempre que o carrinho é atualizado
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(productsCart))
  }, [productsCart]) // Executado sempre que productsCart for alterado

  const addProductToCart = (product: Product): void => {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find((p) => p._id === product._id)

    if (!item) {
      copyProductsCart.push({ ...product, qtd: 1 })
    } else {
      item.qtd = item.qtd + 1
    }

    setProductsCart(copyProductsCart)
  }

  const removeProductFromCart = (id: string): void => {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find((product) => product._id === id)

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1
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
      item.qtd = item.qtd + 1
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
