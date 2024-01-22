import { ProductsProps } from '../types'

export const SomaTotalCarrinho = (cart: ProductsProps[]) => {
  const result = cart.reduce((acc, obj) => {
    return acc + obj.amount
  }, 0)
  return result
}
