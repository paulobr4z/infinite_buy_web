import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ProductsProps } from '../../types'
import * as S from './styled'

export const Cart: React.FC = () => {
  const contextoCarrinho = useContext(CartContext)

  if (!contextoCarrinho) {
    throw new Error('useCart deve ser usado dentro de um CartProvider')
  }

  const {
    productsCart,
    removeProductFromCart,
    clearCart,
    incrementProductQuantity,
  } = contextoCarrinho

  const calculateTotal = (productsCart: ProductsProps[]) => {
    return productsCart
      .reduce((total, produto) => {
        return total + (produto.amount || 1) * produto.price
      }, 0)
      .toFixed(2)
  }

  return (
    <S.CartItens>
      <h2>Seu Carrinho</h2>
      {productsCart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
          <ul>
            {productsCart.map((produto) => (
              <li key={produto._id}>
                <span>{produto.name}</span>
                <span>
                  {produto.amount} x R${produto.price}
                </span>
                <button onClick={() => incrementProductQuantity(produto._id)}>
                  incrementa
                </button>
                <button onClick={() => removeProductFromCart(produto._id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div>
            <h3>Total: R${calculateTotal(productsCart)}</h3>
            <button onClick={clearCart}>Limpar Carrinho</button>
          </div>
        </div>
      )}
    </S.CartItens>
  )
}
