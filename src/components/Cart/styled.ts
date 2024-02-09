import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components'
import { TabletBreakPoint } from '../../const/breakPoint'

export const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.4rem 0.8rem 0 rgba(99, 99, 99, 0.2);
  padding: 2.4rem 3.2rem;

  h3 {
    color: ${({ theme }) => theme.colors.headers};
    font-size: ${({ theme }) => theme.fonts.text.large};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`
export const ClosedIcon = styled(IoCloseSharp)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.headers};
  width: 2.4rem;
  height: 2.4rem;
`

export const EmptyCartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 4.8rem;
`

export const CartItens = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 75px);
  justify-content: space-between;
`
export const EmptyCart = styled.p`
  font-size: ${({ theme }) => theme.fonts.text.small};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 2rem;
  max-height: calc(100vh - 190px);
`
export const CardProduct = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  li {
    display: flex;
    height: 10.8rem;
    gap: 1rem;
    align-items: center;
    border-bottom: 0.1rem solid rgba(99, 99, 99, 0.2);
    padding: 12px 0;
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 1.6rem;
    border: 0.1rem solid rgba(99, 99, 99, 0.2);
    padding: 0.8rem;
  }
`

export const WrapperNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoProducts = styled.div`
  display: flex;
  gap: 2.2rem;

  h2 {
    font-size: ${({ theme }) => theme.fonts.text.small};
    max-width: 45px;
  }
`

export const TitleCartProducts = styled.h3`
  display: flex;
  max-width: 27rem;
  font-size: ${({ theme }) => theme.fonts.text.small};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  @media (max-width: ${TabletBreakPoint}) {
    font-size: ${({ theme }) => theme.fonts.text.extraSmall};
  }
`
export const DescriptionAmount = styled.div`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  cursor: pointer;

  @media (max-width: ${TabletBreakPoint}) {
    width: 24rem;
  }
`
export const Description = styled.span`
  color: ${({ theme }) => theme.colors.text.secondaryAccent};
  font-size: ${({ theme }) => theme.fonts.text.extraSmall};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 45ch;

  @media (max-width: ${TabletBreakPoint}) {
    font-size: ${({ theme }) => theme.fonts.text.errorSize};
  }
`
export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    font-size: ${({ theme }) => theme.fonts.text.small};
    width: 2.4rem;
    text-align: center;
  }

  @media (max-width: ${TabletBreakPoint}) {
    gap: 0.4rem;
    span {
      font-size: ${({ theme }) => theme.fonts.text.errorSize};
      width: 1.5rem;
    }
  }
`
export const Total = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 1rem;
  padding: 1rem 3rem;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  bottom: 0;

  @media (max-width: ${TabletBreakPoint}) {
    padding: 1rem 2.4rem;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.text.medium};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: ${({ theme }) => theme.fonts.text.medium};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`
