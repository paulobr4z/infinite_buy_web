import { useEffect, useState } from 'react'
import { ButtonCategorie } from '../ButtonCategorie'
import { Category, ContentSideBar } from './styled'
import { getCategories } from '../../services/apiGet'

interface CategoriesProps {
  id: string
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

  console.log('CAyegories', categories)

  useEffect(() => {
    getCategoriesResponse()
  }, [])

  const click = (index: number) => {
    console.log('index :', categories[index].name)
  }

  return (
    <ContentSideBar>
      <ul>
        {categories.map((categoria, index) => (
          <Category key={categoria.id}>
            <ButtonCategorie size="small" onClick={() => click(index)}>
              {categoria.name}
            </ButtonCategorie>
          </Category>
        ))}
      </ul>
    </ContentSideBar>
  )
}
