import { RxHamburgerMenu } from 'react-icons/rx'
import * as S from './styled'
import { ButtonCategorie } from '../ButtonCategorie'
import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import { customStylesModalCategories } from '../../const/customStylesModal'
import { ClosedIcon } from '../Cart/styled'
import { CategoriesProps, SideBar } from '../SideBar'
import { getCategories } from '../../services/apiGet'
import { useProductsContext } from '../../context/ProductsContext'
import { capitalize } from '../../utils/capitalize'
Modal.setAppElement('#root')

export const SubMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const { getPaginated, setLoading } = useProductsContext()
  const [categories, setCategories] = useState<CategoriesProps[]>([])

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

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

  const subMenuCategories = categories.slice(0, 5)

  const handleGetCategory = (category: string) => {
    getPaginated(category)
  }

  return (
    <S.Nav>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStylesModalCategories}
          contentLabel="Modal Cart"
        >
          <S.TitleCategories>
            <h3>Categorias</h3>
            <ClosedIcon onClick={closeModal} />
          </S.TitleCategories>
          <SideBar />
        </Modal>
      </div>

      <S.Lista>
        <li>
          <ButtonCategorie size="small" onClick={openModal}>
            <RxHamburgerMenu />
            Ver todas categorias
          </ButtonCategorie>
        </li>

        {subMenuCategories.map((categoria) => (
          <li key={categoria._id}>
            <ButtonCategorie
              size="small"
              onClick={() => handleGetCategory(categoria.name)}
            >
              {capitalize(categoria.name)}
            </ButtonCategorie>
          </li>
        ))}
      </S.Lista>
    </S.Nav>
  )
}
