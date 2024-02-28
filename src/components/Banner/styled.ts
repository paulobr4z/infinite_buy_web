import { styled } from 'styled-components'
import { MobileBreakPoint } from '../../const/breakPoint'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2.5rem;

  img {
    width: 100%;
    max-height: 18.75rem;
  }

  @media (max-width: ${MobileBreakPoint}) {
    margin-top: 1.5625rem;
    img {
      max-height: 12.5rem;
      height: 6.25rem;
    }
  }
`
