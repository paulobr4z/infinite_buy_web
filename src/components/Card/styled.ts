import styled from 'styled-components'

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  width: 224px;
  height: 290px;
  border-radius: 6px;
  border: 1px solid #f4f4f4;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(99, 99, 99, 0.2);

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 12px;
  }

  img {
    width: 60%;
    height: auto;
  }

  h2 {
    color: #000;
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
  }

  p {
    color: #000;
    font-family: Roboto;
    font-weight: 700;
    font-size: 16px;
  }
`
