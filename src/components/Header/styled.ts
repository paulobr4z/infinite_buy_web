import styled from 'styled-components'

export const Header = styled.header`
  height: 8rem;
  display: flex;
  align-items: center;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Logo = styled.div``
export const Pesquisa = styled.div``

export const Cart = styled.button`
  svg {
    font-size: 3rem;
    position: relative;
  }

  span {
    position: absolute;
    top: 18px;
    font-size: 1rem;
  }
`
