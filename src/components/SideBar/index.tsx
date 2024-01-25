import { useEffect, useState } from 'react'
import { ButtonCategorie } from '../ButtonCategorie'
import * as S from './styled'
import { getCategories } from '../../services/apiGet'
import { useProductsContext } from '../../context/ProductsContext'
import { CircularSpinner } from '../CircularSpinner'
import { capitalize } from '../../utils/capitalize'

export interface CategoriesProps {
  _id: string
  name: string
  description: string
  created_at: string
}

export const SideBar = () => {
  const { getPaginated, setLoading, loading } = useProductsContext()
  const [categories, setCategories] = useState<CategoriesProps[]>([])

  const getCategoriesResponse = async () => {
    try {
      setLoading(true)
      const responseCategories = await getCategories()
      setCategories(responseCategories)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategoriesResponse()
  }, [])

  const handleGetCategory = (category: string) => {
    getPaginated(category)
  }

  return (
    <S.ContentSideBar>
      <ul>
        {loading ? (
          <S.Loading>
            <CircularSpinner cor="green" />
          </S.Loading>
        ) : (
          <>
            <S.Category>
              <ButtonCategorie
                size="small"
                onClick={() => handleGetCategory('allProducts')}
              >
                Todas Produtos
              </ButtonCategorie>
            </S.Category>
            {categories.map((categoria) => (
              <S.Category key={categoria._id}>
                <ButtonCategorie
                  size="small"
                  onClick={() => handleGetCategory(categoria.name)}
                >
                  {capitalize(categoria.name)}
                </ButtonCategorie>
              </S.Category>
            ))}
          </>
        )}
      </ul>
    </S.ContentSideBar>
  )
}
