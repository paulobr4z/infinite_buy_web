import { api } from './api'

export type PaginatedProps = {
  page: number
  perPage: number
}

export const getProductsPaginated = async ({
  page,
  perPage,
}: PaginatedProps) => {
  try {
    const response = await api.get('/products', {
      params: {
        page,
        perPage,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
