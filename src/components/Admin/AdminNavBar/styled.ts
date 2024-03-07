import { styled } from 'styled-components'
import { MobileBreakPoint } from '../../../const/breakPoint'
import { RxHamburgerMenu } from 'react-icons/rx'

interface AdminSideBarContainerProps {
  isOpen: boolean
}
export const AdminNavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 0 1.6875rem 0 1.6875rem;
  margin-left: 12.5rem;
  @media (max-width: ${MobileBreakPoint}) {
    margin-left: 0;
  }
`

export const AdminNavBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.75rem;
  box-sizing: border-box;
`

export const AdminNavBarContent = styled.div`
  flex-grow: 1;
  border-radius: 6px;
  border: 1px solid #dee2e6;
  height: 100vh;
  margin-bottom: 20px;
`
export const AdminNavBarTitle = styled.div`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  box-sizing: border-box;
  height: auto;
  flex: 1;
  @media (max-width: ${MobileBreakPoint}) {
    flex: 0;
  }
`
export const AdminNavBarUser = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6875rem;
`
export const AdminNavBarNameUser = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  @media (max-width: ${MobileBreakPoint}) {
    display: none;
  }
`
export const AdminNavBarImageUser = styled.img`
  clip-path: circle(50% at 50% 50%);
  width: 1.625rem;
  height: 1.625rem;
`
export const StyledHamburgerMenu = styled(RxHamburgerMenu)`
  display: none;

  @media (max-width: ${MobileBreakPoint}) {
    display: inline;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.button.categorie};
    width: 3.125rem;
    height: 3.125rem;
    padding: 0.8125rem;
  }
`

export const Overlay = styled.div<AdminSideBarContainerProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  z-index: 1;
`
