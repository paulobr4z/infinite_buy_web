import { useEffect, useState } from 'react'
import { ButtonCategorie } from '../ButtonCategorie'
import { Category, ContentSideBar } from './styled'
import { getCategories } from '../../services/apiGet'
import { useProductsContext } from '../../context/ProductsContext'

interface CategoriesProps {
  _id: string
  name: string
  description: string
  created_at: string
}

export const SideBar = () => {
  const [categories, setCategories] = useState<CategoriesProps[]>([])

  const getCategoriesResponse = async () => {
    try {
      const responseCategories = await getCategories()
      setCategories(responseCategories)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCategoriesResponse()
  }, [])

  const { getPaginated } = useProductsContext()

  const handleGetCategory = (category: string) => {
    getPaginated(category)
  }

  return (
    <ContentSideBar>
      <ul>
        <Category>
          <ButtonCategorie
            size="small"
            onClick={() => handleGetCategory('allProducts')}
          >
            Todas Produtos
          </ButtonCategorie>
        </Category>
        {categories.map((categoria) => (
          <Category key={categoria._id}>
            <ButtonCategorie
              size="small"
              onClick={() => handleGetCategory(categoria.name)}
            >
              {categoria.name}
            </ButtonCategorie>
          </Category>
        ))}
      </ul>
    </ContentSideBar>
  )
}
