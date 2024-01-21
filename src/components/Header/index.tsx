import { PiShoppingCartFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes'
import { Button } from '../Button'
import { SubMenu } from '../SubMenu'
import { Search } from '../Search'
import Modal from 'react-modal'
import { useContext, useState } from 'react'
import { Cart } from '../Cart'
import * as S from './styled'
import { ClosedIcon, TitleCart } from '../Cart/styled'
import { CartContext } from '../../context/CartContext'
import { SomaTotalCarrinho } from '../../utils/somaTotalCarrinho'
Modal.setAppElement('#root')

export const Header = () => {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false)
  const { productsCart } = useContext(CartContext)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }
  const customStyles = {
    content: {
      top: 0,
      left: 'auto',
      right: 0,
      bottom: 0,
      height: '100%',
      marginRight: 0,
      transform: 'none',
      border: 'none',
      overflowY: 'auto' as const,
      backgroundColor: 'white',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  }

  return (
    <S.Header>
      <div className="container">
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
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
            Entrar
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
