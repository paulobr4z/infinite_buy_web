import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 360px;
  min-height: 700px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 24px;
  box-shadow: 0 0 4px 0 rgba(99, 99, 99, 0.2);
  border: 1px solid #dee2e6;

  header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 18px 24px;
    gap: 10px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 84px;
      padding: 32px;
      gap: 16px;
      border-bottom: 1px solid #dee2e6;

      p {
        font-size: 18px;
        font-weight: 600;
      }
    }

    .selected {
      background-color: #00bea0;
      color: #ffffff;
    }
  }
`
