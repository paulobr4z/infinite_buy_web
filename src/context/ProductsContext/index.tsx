import { createContext, useContext, useEffect, useState } from 'react'
import { getProductsPaginated } from '../../services/apiGet'
import { ProductsProps } from '../../types'
import { PaginationProps } from '../../components/CardContainer'

export interface ProductsContextProps {
  products: ProductsProps[]
  setProducts: (products: ProductsProps[]) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  pagination: PaginationProps
  setPagination: (pagination: PaginationProps) => void
  pageArray: number[]
  setPageArray: (pageArray: number[]) => void
  getPaginated: (categoryId?: string) => void
}

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps,
)

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
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

  const getPaginated = async (category?: string) => {
    try {
      setLoading(true)

      if (category === 'allProducts') {
        category = undefined
      }

      const response = await getProductsPaginated({
        page: currentPage,
        perPage: 15,
        category,
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

  useEffect(() => {
    getPaginated()
  }, [currentPage])

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        currentPage,
        setCurrentPage,
        pagination,
        setPagination,
        pageArray,
        setPageArray,
        getPaginated,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  const context = useContext(ProductsContext)

  if (context === undefined) {
    throw new Error('Fora do ProductsProvider')
  }

  return context
}
