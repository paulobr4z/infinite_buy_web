import { useContext, useEffect, useState } from 'react'
import { ProductsProps } from '../../types'
import { Card } from '../Card'
import * as S from './styled'
import { getProductsPaginated } from '../../services/apiGet'
import { CircularSpinner } from '../CircularSpinner'
import { Pagination } from '../Pagination'
import { CartContext } from '../../context/CartContext'

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
  const [products, setProducts] = useState<ProductsProps[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pagination, setPagination] = useState<PaginationProps>(
    {} as PaginationProps,
  )

  const [pageArray, setPageArray] = useState<number[]>([1])

  const slice = (pageArray2: number[]) => {
    const windowSize = 5
    const halfWindowSize = Math.floor(windowSize / 2)

    if (currentPage <= halfWindowSize) {
      return pageArray2.slice(0, windowSize)
    }

    if (currentPage >= pagination.totalPages - halfWindowSize) {
      return pageArray2.slice(-windowSize)
    }

    return pageArray2.slice(
      currentPage - halfWindowSize - 1,
      currentPage + halfWindowSize,
    )
  }

  const getPaginated = async () => {
    try {
      setLoading(true)

      const response = await getProductsPaginated({
        page: currentPage,
        perPage: 15,
      })

      setPagination(response.pagination)
      setProducts(response.data)
      setPageArray(
        slice(
          Array.from(
            { length: response.pagination.totalPages },
            (_, i) => i + 1,
          ),
        ),
      )
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBuyClick = (productId: string) => {
    addProductToCart(productId)
  }

  useEffect(() => {
    getPaginated()
  }, [currentPage])

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
            <Card cardData={products} onBuyClick={handleBuyClick} />
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
