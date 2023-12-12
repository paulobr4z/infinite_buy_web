import { styled } from 'styled-components'
import { MobileBreakPoint } from '../../const/breackPoint'

export const SearchInput = styled.div`
  height: 3.5rem;
  display: flex;
  align-items: center;
  width: 70%;
  border-radius: 0.4rem;
  border: 1px solid rgba(99, 99, 99, 0.21);
  padding-right: 1.6rem;
  margin: 1rem 0;

  @media (max-width: ${MobileBreakPoint}) {
    width: 100%;
  }

  input {
    width: 100%;
    border: none;
    padding-left: 1.6rem;
    font-size: ${({ theme }) => theme.fonts.text.medium};
    &:placeholder-shown {
      padding-left: 1.6rem;
      opacity: 0.3;
      font-size: ${({ theme }) => theme.fonts.text.medium};

      @media (max-width: ${MobileBreakPoint}) {
        font-size: ${({ theme }) => theme.fonts.text.extraSmall};
      }
    }
  }

  svg {
    color: rgba(99, 99, 99, 0.21);
    font-size: 2rem;
    cursor: pointer;
  }
`
