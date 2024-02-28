import styled from 'styled-components'
import { IoCloseSharp } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

export const Header = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0rem 0.25rem 0.5rem 0rem rgba(99, 99, 99, 0.2);
`

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`

export const Logo = styled.div``

export const Cart = styled.button`
  position: relative;
  svg {
    font-size: 2.25rem;
    color: #00988d;
  }
`
export const NumberContentCart = styled.div`
  border-radius: 12.5rem;
  border: 0.0625rem solid #fff;
  background: #00988d;
  display: flex;
  width: 1.125rem;
  height: 1.125rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.625rem;

  span {
    color: #fff;
    font-size: 0.625rem;
  }
`

export const HeaderMenuHamburguer = styled.header`
  height: 6.8125rem;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ContentMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1.5rem;
`

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.0313rem;
  width: 100%;
`

export const ContentInfoUser = styled.div`
  display: flex;
  gap: 0.8125rem;
  width: 100%;
`

export const ContentDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;

  h3 {
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    font-weight: 500;
  }

  p,
  a {
    color: ${({ theme }) => theme.colors.text.light};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.8125rem;
    font-weight: 400;
  }
`

export const RegUserCircle = styled(FaRegUserCircle)`
  width: 2.25rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.white};
`

export const ClosedIcon = styled(IoCloseSharp)`
  cursor: pointer;
  width: 1.375rem;
  height: 1.375rem;
  color: ${({ theme }) => theme.colors.white};
`

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  p {
    font-size: 0.9375rem;
  }
`
export const LogOut = styled(BiLogOut)`
  cursor: pointer;
  width: 1.375rem;
  height: 1.375rem;
  color: ${({ theme }) => theme.colors.white};
`
