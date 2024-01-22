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
  gap: 2.5rem;
`

export const CartItens = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`
export const EmptyCart = styled.p`
  font-size: ${({ theme }) => theme.fonts.text.small};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
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
  border-bottom: 0.1rem solid rgba(99, 99, 99, 0.2);

  li {
    display: flex;
    height: 10.8rem;
    gap: 2.2rem;
    align-items: center;
    border-bottom: 0.1rem solid rgba(99, 99, 99, 0.2);
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 1.6rem;
    border: 0.1rem solid rgba(99, 99, 99, 0.2);
    padding: 0.8rem;
  }

  @media (max-width: ${TabletBreakPoint}) {
    img {
      width: 5rem;
      height: 5rem;
    }
  }
`
export const InfoProducts = styled.div`
  display: flex;
  gap: 2.2rem;

  h2 {
    font-size: ${({ theme }) => theme.fonts.text.small};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const TitleCartProducts = styled.h3`
  display: flex;
  font-size: ${({ theme }) => theme.fonts.text.small};

  @media (max-width: ${TabletBreakPoint}) {
    font-size: ${({ theme }) => theme.fonts.text.extraSmall};
  }
`
export const DescriptionAmount = styled.div`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: ${TabletBreakPoint}) {
    width: 24rem;
  }
`
export const Description = styled.span`
  color: ${({ theme }) => theme.colors.text.secondaryAccent};
  font-size: ${({ theme }) => theme.fonts.text.extraSmall};

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
  gap: 1rem;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  position: fixed;
  bottom: 0;

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
