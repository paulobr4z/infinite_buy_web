import styled from 'styled-components'
import { TabletBreakPoint } from '../../const/breakPoint'

export const ContentSideBar = styled.section`
  width: 18.75rem;
  height: 100vh;
  padding: 1.5rem 0;
  overflow: auto;
  max-height: calc(100vh - 4.6875rem);

  @media (max-width: ${TabletBreakPoint}) {
    max-height: calc(100vh - 6.8125rem);
  }

  ul {
    display: flex;
    flex-direction: column;
  }
`

export const Category = styled.li`
  color: #636363;
  border-bottom: 0.0625rem solid rgba(99, 99, 99, 0.2);
  padding: 0.5rem 1.5rem;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
