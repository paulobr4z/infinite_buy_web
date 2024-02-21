import styled from 'styled-components'

export const AdminSideBarItem = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 1.5rem 0.75rem 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background: rgba(0, 190, 160, 0.15);
    color: ${(props) => props.theme.colors.text.light};
  }

  &.active {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text.light};
  }

  a {
    text-decoration: none;
    font-weight: ${(props) => props.theme.fonts.weight.semiBold};
  }
`
