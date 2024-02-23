import { styled } from 'styled-components'
import { MobileBreakPoint } from '../../const/breakPoint'

export const SearchInput = styled.div`
  height: 2.1875rem;
  display: flex;
  align-items: center;
  width: 70%;
  border-radius: 0.25rem;
  border: 0.0625rem solid rgba(99, 99, 99, 0.21);
  padding-right: 1rem;
  margin: 0.625rem 0;

  @media (max-width: ${MobileBreakPoint}) {
    width: 100%;
  }

  input {
    width: 100%;
    border: none;
    padding-left: 1rem;
    font-size: ${({ theme }) => theme.fonts.text.medium};
    &:placeholder-shown {
      padding-left: 1rem;
      opacity: 0.3;
      font-size: ${({ theme }) => theme.fonts.text.medium};

      @media (max-width: ${MobileBreakPoint}) {
        font-size: ${({ theme }) => theme.fonts.text.extraSmall};
      }
    }
  }

  svg {
    color: rgba(99, 99, 99, 0.21);
    font-size: 1.25rem;
    cursor: pointer;
  }
`
