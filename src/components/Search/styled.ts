import { styled } from 'styled-components'

export const SearchInput = styled.div`
  height: 3.5rem;
  display: flex;
  align-items: center;
  width: 70%;
  border-radius: 4px 0px 0px 4px;
  border: 1px solid rgba(99, 99, 99, 0.21);
  padding-right: 1.6rem;

  input {
    width: 100%;
    border: none;
    padding-left: 1.6rem;
    font-size: ${({ theme }) => theme.fonts.text.medium};
    &:placeholder-shown {
      padding-left: 1.6rem;
      opacity: 0.3;
      font-size: ${({ theme }) => theme.fonts.text.medium};
    }
  }

  svg {
    color: rgba(99, 99, 99, 0.21);
    font-size: 2rem;
    cursor: pointer;
  }
`
