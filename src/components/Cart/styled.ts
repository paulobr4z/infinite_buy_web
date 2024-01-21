import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components'

export const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #fff;
  box-shadow: inset -1px -5px 7px rgba(99, 99, 99, 0.2);
  padding: 24px 32px;

  h3 {
    color: #0e3c1f;
    font-size: 18px;
    font-weight: 700;
  }
`
export const ClosedIcon = styled(IoCloseSharp)`
  cursor: pointer;
  width: 24px;
  height: 24px;
`

export const EmptyCartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const CartItens = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const EmptyCart = styled.p`
  font-size: 14px;
  font-weight: 700;
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
  border-bottom: 1px solid rgba(99, 99, 99, 0.2);

  li {
    display: flex;
    height: 108px;
    gap: 22px;
    align-items: center;
    border-bottom: 1px solid rgba(99, 99, 99, 0.2);
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    border: 1px solid rgba(99, 99, 99, 0.2);
    padding: 8px;
  }

  @media (max-width: 700px) {
    img {
      width: 50px;
      height: 50px;
    }
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
`

export const TitleCartProducts = styled.h3`
  display: flex;
  font-size: 14px;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`
export const DescriptionAmount = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 240px;
  }
`
export const Description = styled.span`
  color: #636363;
  font-size: 12px;

  @media (max-width: 700px) {
    font-size: 10px;
  }
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

  @media (max-width: 700px) {
    gap: 4px;
    span {
      font-size: 11px;
      width: 15px;
    }
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
