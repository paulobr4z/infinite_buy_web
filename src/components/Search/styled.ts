import { styled } from 'styled-components'

export const SearchInput = styled.div`
  height: 3.5rem;
  display: flex;
  width: 70%;
  input {
    width: 100%;
    border-radius: 4px 0px 0px 4px;
    border: 1px solid rgba(99, 99, 99, 0.21);

    &:placeholder-shown {
      padding-left: 1.6rem;
      opacity: 0.3;
      font-size: ${({ theme }) => theme.fonts.text.medium};
    }
  }
`

export const ButtonSearch = styled.button`
  border-radius: 0px 4px 4px 0px;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  font-size: ${({ theme }) => theme.fonts.text.small};
  color: ${({ theme }) => theme.colors.text.light};
  padding: 8px 32px;
  transition: 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.7;
  }
`
