import { PiShoppingCartFill } from 'react-icons/pi'
import * as S from './styled'
import { Button } from '../Button'
import { SubMenu } from '../SubMenu'
import { Search } from '../Search'
import Modal from 'react-modal'
import { useState } from 'react'
import { Cart } from '../Cart'
Modal.setAppElement('#root')

export const Header = () => {
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
      top: 0,
      left: 'auto',
      right: 0,
      bottom: 0,
      width: '480px',
      height: '100%',
      marginRight: 0,
      transform: 'none',
      backgroundColor: 'white',
      border: 'none',
      overflowY: 'auto',
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
            <Cart />
          </Modal>
        </div>
        <S.ContentHeader>
          <S.Logo>
            <img src="logo-02.png" alt="Logo" />
          </S.Logo>

          <Search />

          <Button size="small">Entrar</Button>

          <S.Cart>
            <PiShoppingCartFill onClick={openModal} />
            <S.NumberContentCart>
              <span>5</span>
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
