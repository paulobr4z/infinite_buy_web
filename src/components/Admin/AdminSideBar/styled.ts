import { styled } from 'styled-components'
import { MobileBreakPoint } from '../../../const/breakPoint'

interface AdminSideBarLogoProps {
  image: string
}

export const AdminSideBarConteiner = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  font-size: 2rem;
  text-align: center;
  width: 12.5rem;
  height: 100vh;
  padding: 2.4rem 0;
  gap: 2rem;
  transition: transform 0.5s ease-in-out;

  @media (max-width: ${MobileBreakPoint}) {
    display: none;
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
