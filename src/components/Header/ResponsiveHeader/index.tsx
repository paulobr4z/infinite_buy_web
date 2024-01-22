import { PiShoppingCartFill } from 'react-icons/pi'
import * as S from './styled'
import { Search } from '../../Search'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SomaTotalCarrinho } from '../../../utils/somaTotalCarrinho'
import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import Modal from 'react-modal'
import { ClosedIcon, TitleCart } from '../../Cart/styled'
import { Cart } from '../../Cart'
import { customStylesModalCartResponsive } from '../../../const/customStylesModal'
Modal.setAppElement('#root')

// import { RxCross2 } from "react-icons/rx";

export const ResponsiveHeader = () => {
  const { productsCart } = useContext(CartContext)
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <S.Header>
      <div className="container">
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStylesModalCartResponsive}
            contentLabel="Modal Cart"
          >
            <TitleCart>
              <h3>Seu Carrinho</h3>
              <ClosedIcon onClick={closeModal} />
            </TitleCart>
            <Cart />
          </Modal>
        </div>
        <div className="wrapper-menu">
          <S.ContentHeader>
            <RxHamburgerMenu size="28" />

            <S.Logo>
              <img src="logo-02.png" alt="Logo" />
            </S.Logo>

            <S.Cart>
              <PiShoppingCartFill onClick={openModal} />
              <S.NumberContentCart>
                <span>{SomaTotalCarrinho(productsCart)}</span>
              </S.NumberContentCart>
            </S.Cart>
          </S.ContentHeader>
        </div>

        <Search />

        {/* <Button size="small">Entrar</Button> */}
      </div>
    </S.Header>
  )
}
