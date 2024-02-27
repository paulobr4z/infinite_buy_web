import { styled } from 'styled-components'
import { MobileBreakPoint } from '../../../const/breakPoint'
import { IoCloseSharp } from 'react-icons/io5'

interface AdminSideBarContainerProps {
  isOpen: boolean
}

interface AdminSideBarLogoProps {
  image: string
}
export const AdminSideBarContainer = styled.section<AdminSideBarContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  font-size: 2rem;
  text-align: center;
  width: 12.5rem;
  height: 100vh;
  padding: 2.4rem 0;
  gap: 2rem;
  z-index: 2;

  @media (max-width: ${MobileBreakPoint}) {
    transform: ${(props) =>
      props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.26s ease-out;
    width: auto;
  }
`
export const ItemsConteiner = styled.div`
  overflow: auto;
`
export const AdminSideBarLogo = styled.div<AdminSideBarLogoProps>`
  display: flex;
  justify-content: center;
  height: 6.25rem;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
`
export const SideBarCloseIcon = styled(IoCloseSharp)<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0.625rem;
  right: 0.3125rem;
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
`
