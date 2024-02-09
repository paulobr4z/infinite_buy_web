import styled from 'styled-components'
import { IoCloseSharp } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

export const Header = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px 0px rgba(99, 99, 99, 0.2);
`

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`

export const Logo = styled.div``

export const Cart = styled.button`
  position: relative;
  svg {
    font-size: 3.6rem;
    color: #00988d;
  }
`
export const NumberContentCart = styled.div`
  border-radius: 20rem;
  border: 1px solid #fff;
  background: #00988d;
  display: flex;
  width: 1.8rem;
  height: 1.8rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;

  span {
    color: #fff;
    font-size: 1rem;
  }
`

export const HeaderMenuHamburguer = styled.header`
  height: 10.9rem;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ContentMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 2.4rem;
`

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.65rem;
  width: 100%;
`

export const ContentInfoUser = styled.div`
  display: flex;
  gap: 1.3rem;
  width: 100%;
`

export const ContentDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  h3 {
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.6rem;
    font-weight: 500;
  }

  p,
  a {
    color: ${({ theme }) => theme.colors.text.light};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.3rem;
    font-weight: 400;
  }
`

export const RegUserCircle = styled(FaRegUserCircle)`
  width: 3.6rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.white};
`

export const ClosedIcon = styled(IoCloseSharp)`
  cursor: pointer;
  width: 2.2rem;
  height: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
`

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.5rem;
  }
`
export const LogOut = styled(BiLogOut)`
  cursor: pointer;
  width: 2.2rem;
  height: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
`
