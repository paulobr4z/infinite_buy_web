import { useContext } from 'react'
import { ProductsProps } from '../../types'
import { Card } from '../Card'
import * as S from './styled'
import { CircularSpinner } from '../CircularSpinner'
import { Pagination } from '../Pagination'
import { CartContext } from '../../context/CartContext'
import { useProductsContext } from '../../context/ProductsContext'

export interface PaginationProps {
  currentPage: number
  previousPage: number | null
  nextPage: number | null
  perPage: number
  totalPages: number
  totalItems: number
}

export const CardContainer: React.FC = () => {
  const { addProductToCart } = useContext(CartContext)

  const {
    currentPage,
    loading,
    pageArray,
    pagination,
    products,
    setCurrentPage,
  } = useProductsContext()

  const handleBuyClick = (productId: ProductsProps) => {
    addProductToCart(productId)
  }

  return (
    <div className="container">
      {loading ? (
        <S.Loading>
          <CircularSpinner cor="green" />
        </S.Loading>
      ) : (
        <>
          <S.TitleCards>Todos os Produtos</S.TitleCards>
          <S.ContainerCard>
            {products.map((product) => (
              <Card
                key={product._id}
                product={product}
                onBuyClick={handleBuyClick}
              />
            ))}
          </S.ContainerCard>

          <Pagination
            currentPage={currentPage}
            pageArray={pageArray}
            setCurrentPage={setCurrentPage}
            pagination={pagination}
          />
        </>
      )}
    </div>
  )
}
