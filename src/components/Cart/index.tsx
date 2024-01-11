import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

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

  return (
    <div>
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
                  {produto.qtd} x R${produto.price}
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
    </div>
  )
}

const calculateTotal = (productsCart) => {
  return productsCart
    .reduce((total, produto) => {
      return total + produto.qtd * produto.price
    }, 0)
    .toFixed(2)
}
