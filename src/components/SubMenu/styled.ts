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

export const TitleCategories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 8px 0px rgba(99, 99, 99, 0.2);
  padding: 24px 32px;

  h3 {
    color: #0e3c1f;
    font-size: ${({ theme }) => theme.fonts.text.large};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`
