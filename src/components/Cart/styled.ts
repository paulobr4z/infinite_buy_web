import styled from 'styled-components'

export const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(59, 53, 53, 0.68);
  color: #0e3c1f;
  font-size: 30px;
`

export const CartItens = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardProduct = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  border-bottom: 2px solid rgba(59, 53, 53, 0.68);

  li {
    display: flex;
    height: 108px;
    gap: 22px;
    align-items: center;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    border: 1px solid rgba(99, 99, 99, 0.2);
    padding: 8px;
  }
`
export const InfoProducts = styled.div`
  display: flex;
  gap: 22px;
  

  h2 {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    border: 1px solid rgba(99, 99, 99, 0.2);
    padding: 8px;
  }
`

export const TitleCartProducts = styled.h3`
  display: flex;
  font-size: 14px;
`
export const DescriptionAmount = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`
export const Description = styled.span`
  color: #636363;
  font-size: 12px;
`
export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  

  span {
    font-size: 15px;
    width: 24px;
    text-align: center;
  }
`
export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  font-size: 16px;
  font-weight: 700;
  
  p {
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 16px;
    font-weight: 700;
  }
`
