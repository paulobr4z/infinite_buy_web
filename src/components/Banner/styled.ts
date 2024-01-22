import { styled } from 'styled-components'
import { MobileBreakPoint } from '../../const/breakPoint'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;

  img {
    width: 100%;
    max-height: 30rem;
  }

  @media (max-width: ${MobileBreakPoint}) {
    margin-top: 2.5rem;
    img {
      max-height: 20rem;
      height: 10rem;
    }
  }
`
