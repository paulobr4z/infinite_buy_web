import styled from 'styled-components'

export const AdminSideBarItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 1.5rem 0.75rem 1.5rem;
  color: ${(theme) => theme.theme.colors.primary};
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.text.light};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.light};
  }

  a {
    font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  }
`
