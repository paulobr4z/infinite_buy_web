import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ProductsProps } from '../../types'
import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi'
import * as S from './styled'
import { Button } from '../Button'
import { formatCurrency } from '../../utils/formatCurrency'

export const Cart: React.FC = () => {
  const contextoCarrinho = useContext(CartContext)

  if (!contextoCarrinho) {
    throw new Error('useCart deve ser usado dentro de um CartProvider')
  }

  const { productsCart, removeProductFromCart, incrementProductQuantity } =
    contextoCarrinho

  const calculateTotal = (productsCart: ProductsProps[]) => {
    return productsCart
      .reduce((total, produto) => {
        return total + (produto.amount || 1) * produto.price
      }, 0)
      .toFixed(2)
      .replace('.', ',')
  }

  return (
    <S.CartItens>
      {productsCart.length === 0 ? (
        <S.EmptyCartContent>
          <S.EmptyCart>Seu carrinho está vazio</S.EmptyCart>
        </S.EmptyCartContent>
      ) : (
        <S.CartContent>
          <S.CardProduct>
            {productsCart.map((produto) => (
              <li key={produto._id}>
                <img src={produto.images} alt="produto" />
                <S.InfoProducts>
                  <div>
                    <S.WrapperNamePrice>
                      <S.TitleCartProducts>{produto.name}</S.TitleCartProducts>
                      <S.TitleCartProducts>
                        {formatCurrency(produto.price)}
                      </S.TitleCartProducts>
                    </S.WrapperNamePrice>

                    <S.DescriptionAmount>
                      <S.Description>{produto.description}</S.Description>

                      <S.Amount>
                        <FiMinusSquare
                          size={'15px'}
                          onClick={() => removeProductFromCart(produto._id)}
                        />
                        <span>{produto.amount}</span>

                        <FiPlusSquare
                          size={'15px'}
                          onClick={() => incrementProductQuantity(produto._id)}
                        />
                      </S.Amount>
                    </S.DescriptionAmount>
                  </div>
                </S.InfoProducts>
              </li>
            ))}
          </S.CardProduct>
        </S.CartContent>
      )}

      <S.Total>
        <p>
          Total: <span>R$ {calculateTotal(productsCart)}</span>
        </p>

        <div>
          <Button size="large">Finalizar Compra</Button>
        </div>
      </S.Total>
    </S.CartItens>
  )
}
