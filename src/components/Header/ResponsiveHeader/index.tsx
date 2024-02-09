import { PiShoppingCartFill } from 'react-icons/pi'
import * as S from './styled'
import { Search } from '../../Search'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SomaTotalCarrinho } from '../../../utils/somaTotalCarrinho'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import Modal from 'react-modal'
import { ClosedIcon, TitleCart } from '../../Cart/styled'
import { Cart } from '../../Cart'
import {
  customStylesModalCartResponsive,
  customStylesModalMenu,
} from '../../../const/customStylesModal'
import { SideBar } from '../../SideBar'
import { Link } from 'react-router-dom'
import { routes } from '../../../routes'
import { useAuthContext } from '../../../context/AuthContext'

Modal.setAppElement('#root')

// import { RxCross2 } from "react-icons/rx";

export const ResponsiveHeader = () => {
  const { productsCart } = useContext(CartContext)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalMenuIsOpen, setModalMenuIsOpen] = useState(false)
  const { user, isAuthenticated, setIsAuthenticated } = useAuthContext()
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModalMenu = () => {
    setModalMenuIsOpen(true)
  }

  const closeModalMenu = () => {
    setModalMenuIsOpen(false)
  }

  const LogOut = () => {
    localStorage.clear()
    setIsAuthenticated(false)
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

        <Modal
          isOpen={modalMenuIsOpen}
          onRequestClose={closeModalMenu}
          style={customStylesModalMenu}
          contentLabel="Modal Menu Hamburguer"
        >
          <S.HeaderMenuHamburguer>
            <S.ContentMenu>
              <S.ContentInfo>
                <S.ContentInfoUser>
                  <S.RegUserCircle />
                  <S.ContentDescriptions>
                    <h3>Bem vindo!</h3>

                    {isAuthenticated ? (
                      <>
                        <S.ContentUser>
                          <p>{user?.name}</p>
                          <S.LogOut onClick={LogOut} />
                        </S.ContentUser>
                      </>
                    ) : (
                      <p>
                        <Link to={routes.login}>Entre</Link> ou{' '}
                        <Link to={routes.signup}>Cadastre-se</Link>
                      </p>
                    )}
                  </S.ContentDescriptions>
                </S.ContentInfoUser>

                <S.ClosedIcon onClick={closeModalMenu} />
              </S.ContentInfo>
            </S.ContentMenu>
          </S.HeaderMenuHamburguer>
          <SideBar />
        </Modal>

        <div className="wrapper-menu">
          <S.ContentHeader>
            <RxHamburgerMenu size="28" onClick={openModalMenu} />

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
      </div>
    </S.Header>
  )
}
