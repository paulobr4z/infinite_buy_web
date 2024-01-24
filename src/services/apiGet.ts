import { api } from './api'

export type PaginatedProps = {
  page?: number
  perPage?: number
  category?: string
}

export const getProductsPaginated = async ({
  page,
  perPage,
  category,
}: PaginatedProps) => {
  if (category) {
    page = 1
  }

  try {
    const response = await api.get('/products', {
      params: {
        page,
        perPage,
        category,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getCategories = async () => {
  try {
    const response = await api.get('/categories/products')

    return response.data
  } catch (error) {
    console.log(error)
  }
}
