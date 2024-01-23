import { RxHamburgerMenu } from 'react-icons/rx'
import * as S from './styled'
import { ButtonCategorie } from '../ButtonCategorie'
import Modal from 'react-modal'
import { useState } from 'react'
import { customStylesModalCategories } from '../../const/customStylesModal'
import { ClosedIcon } from '../Cart/styled'
import { SideBar } from '../SideBar'
Modal.setAppElement('#root')

export const SubMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
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
        <li>
          <ButtonCategorie size="small">Ofertas</ButtonCategorie>
        </li>
        <li>
          <ButtonCategorie size="small">Hortfruti</ButtonCategorie>
        </li>
        <li>
          <ButtonCategorie size="small">Açougue</ButtonCategorie>
        </li>
        <li>
          <ButtonCategorie size="small">Bebidas</ButtonCategorie>
        </li>
        <li>
          <ButtonCategorie size="small">Favoritos</ButtonCategorie>
        </li>
      </S.Lista>
    </S.Nav>
  )
}
