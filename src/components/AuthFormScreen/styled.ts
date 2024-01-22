import styled from 'styled-components'
import { TabletBreakPoint } from '../../const/breakPoint'

export const ContentWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};

  section {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .logo {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${TabletBreakPoint}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
