import { PiShoppingCartFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes'
import { useAuthContext } from '../../context/AuthContext'
import { Button } from '../Button'
import { SubMenu } from '../SubMenu'
import { Search } from '../Search'
import Modal from 'react-modal'
import { useContext, useEffect, useState } from 'react'
import { Cart } from '../Cart'
import * as S from './styled'
import { ClosedIcon, TitleCart } from '../Cart/styled'
import { CartContext } from '../../context/CartContext'
import { SomaTotalCarrinho } from '../../utils/somaTotalCarrinho'
import { customStylesModalCart } from '../../const/customStylesModal'
Modal.setAppElement('#root')

export const Header = () => {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false)
  const { productsCart } = useContext(CartContext)
  const { user, isAuthenticated } = useAuthContext()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'initial')
  }, [modalIsOpen])
  return (
    <S.Header>
      <div className="container">
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStylesModalCart}
            contentLabel="Modal Cart"
          >
            <TitleCart>
              <h3>Seu Carrinho</h3>
              <ClosedIcon onClick={closeModal} />
            </TitleCart>
            <Cart />
          </Modal>
        </div>
        <S.ContentHeader>
          <S.Logo>
            <img src="logo-02.png" alt="Logo" />
          </S.Logo>

          <Search />

          <Button size="small" onClick={() => navigate(routes.login)}>
            {isAuthenticated ? user?.name : 'Entrar'}
          </Button>

          <S.Cart>
            <PiShoppingCartFill onClick={openModal} />
            <S.NumberContentCart>
              <span>{SomaTotalCarrinho(productsCart)}</span>
            </S.NumberContentCart>
          </S.Cart>
        </S.ContentHeader>
        <S.ContentSubMenu>
          <SubMenu />
        </S.ContentSubMenu>
      </div>
    </S.Header>
  )
}
