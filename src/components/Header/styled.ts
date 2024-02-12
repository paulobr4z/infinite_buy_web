import styled from 'styled-components'
import { BiLogOut } from 'react-icons/bi'
export const Header = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(99, 99, 99, 0.2);
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

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  gap: 1.2rem;
`

export const ContentSubMenu = styled.div`
  height: 4.8rem;
`

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.5rem;
    white-space: nowrap;
  }
`
export const LogOut = styled(BiLogOut)`
  cursor: pointer;
  width: 2.2rem;
  height: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
`
