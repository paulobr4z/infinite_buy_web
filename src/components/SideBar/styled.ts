import styled from 'styled-components'
import { TabletBreakPoint } from '../../const/breakPoint'

export const ContentSideBar = styled.section`
  width: 300px;
  height: 100vh;
  padding: 2.4rem 0;
  overflow: auto;
  max-height: calc(100vh - 75px);

  @media (max-width: ${TabletBreakPoint}) {
    max-height: calc(100vh - 109px);
  }

  ul {
    display: flex;
    flex-direction: column;
  }
`

export const Category = styled.li`
  color: #636363;
  border-bottom: 0.1rem solid rgba(99, 99, 99, 0.2);
  padding: 0.8rem 2.4rem;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
