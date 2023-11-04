import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px 0px rgba(99, 99, 99, 0.2);
`

export const Logo = styled.div``

export const Cart = styled.button`
  svg {
    font-size: 3rem;
    position: relative;
  }

  span {
    position: absolute;
    top: 1.8rem;
    font-size: 1rem;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`

export const ContentSubMenu = styled.div`
  height: 4.8rem;
`
