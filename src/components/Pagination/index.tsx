import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import * as S from './styled'
import { PaginationProps } from '../CardContainer'

interface PaginationCarouselProps {
  currentPage: number
  pageArray: number[]
  setCurrentPage: (page: number) => void
  pagination: PaginationProps
}

export const Pagination: React.FC<PaginationCarouselProps> = ({
  currentPage,
  pageArray,
  setCurrentPage,
  pagination,
}) => (
  <S.ContainerCarouselPagination>
    <button
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage <= 1}
    >
      <IoIosArrowBack size={22} />
    </button>

    {pageArray?.map((index) => (
      <S.NumberButton
        style={{
          fontWeight: `${currentPage === index ? '700' : '400'}`,
        }}
        onClick={() => setCurrentPage(index)}
        key={index}
      >
        {index}
      </S.NumberButton>
    ))}

    <button
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage >= pagination.totalPages}
    >
      <IoIosArrowForward size={22} />
    </button>
  </S.ContainerCarouselPagination>
)
