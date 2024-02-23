import styled from 'styled-components'
import { BiLogOut } from 'react-icons/bi'
export const Header = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(99, 99, 99, 0.2);
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

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  gap: 0.75rem;
`

export const ContentSubMenu = styled.div`
  height: 3rem;
`

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  p {
    font-size: 0.9375rem;
    white-space: nowrap;
  }
`
export const LogOut = styled(BiLogOut)`
  cursor: pointer;
  width: 1.375rem;
  height: 1.375rem;
  color: ${({ theme }) => theme.colors.white};
`
