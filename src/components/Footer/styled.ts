import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 4rem 0;
  .container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    }
  }
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`
export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.text.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-bottom: 1.2rem;
`
export const ListLink = styled.li`
  a {
    color: ${({ theme }) => theme.colors.text.light};
    font-size: ${({ theme }) => theme.fonts.text.extraSmall};
  }
`
