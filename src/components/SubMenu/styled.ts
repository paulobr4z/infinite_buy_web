import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`

export const Lista = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.text.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  li {
    display: flex;
    align-items: center;
  }

  svg {
    font-size: 2rem;
    margin-right: 1.6rem;
  }
`
