import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart: React.FC = () => {
  const contextoCarrinho = useContext(CartContext)

  if (!contextoCarrinho) {
    throw new Error('useCart deve ser usado dentro de um CartProvider')
  }

  const { productsCart, removeProductFromCart, clearCart } = contextoCarrinho

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {productsCart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul>
          {productsCart.map((produto) => (
            <li key={produto._id}>
              <span>{produto.name}</span>
              <span>
                {produto.qtd} x R${produto.price}
              </span>
              <button onClick={() => removeProductFromCart(produto._id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Limpar Carrinho</button>
    </div>
  )
}
