import { string } from 'yup'
import { ButtonCategorie } from '../ButtonCategorie'
import { Category, ContentSideBar } from './styled'
import { getProductsCategory } from '../../services/apiGet'

export const SideBar = () => {
  const getCategories = async () => {
    try {
      const responseCategories = await getProductsCategory()
      console.log('CAtegotias aqui ', responseCategories)
    } catch (error) {
      console.error(error)
    }
  }

  getCategories()
  return (
    <ContentSideBar>
      <ul>
        <Category>
          <ButtonCategorie size="small">Açougue</ButtonCategorie>
        </Category>
        <Category>
          <ButtonCategorie size="small">Açougue</ButtonCategorie>
        </Category>
        <Category>
          <ButtonCategorie size="small">Açougue</ButtonCategorie>
        </Category>
        <Category>
          <ButtonCategorie size="small">Açougue</ButtonCategorie>
        </Category>
        <Category>
          <ButtonCategorie size="small">Açougue</ButtonCategorie>
        </Category>
        <Category>
          <ButtonCategorie size="small">Açougue</ButtonCategorie>
        </Category>
        <Category>
          <ButtonCategorie size="small">Açougue</ButtonCategorie>
        </Category>
      </ul>
    </ContentSideBar>
  )
}
