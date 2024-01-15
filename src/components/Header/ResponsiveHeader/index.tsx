import { PiShoppingCartFill } from 'react-icons/pi'
import * as S from './styled'
import { Search } from '../../Search'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SomaTotalCarrinho } from '../../../utils/somaTotalCarrinho'
import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import Modal from 'react-modal'
import { ClosedIcon, TitleCart } from '../../Cart/styled'
Modal.setAppElement('#root')

// import { RxCross2 } from "react-icons/rx";

export const ResponsiveHeader = () => {
  const { productsCart } = useContext(CartContext)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }
  const customStyles = {
    content: {
      width: '375px',
      top: 0,
      left: 'auto',
      right: 0,
      bottom: 0,
      height: '100%',
      marginRight: 0,
      transform: 'none',
      backgroundColor: 'white',
      border: 'none',
      overflowY: 'auto' as const,
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
            <S.Cart />
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
