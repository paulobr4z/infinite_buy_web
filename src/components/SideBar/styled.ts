import styled from 'styled-components'

export const ContentSideBar = styled.section`
  width: 300px;
  height: 100vh;
  padding: 24px 32px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const Category = styled.li`
  color: #636363;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
