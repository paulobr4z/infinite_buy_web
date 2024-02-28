import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components'
import { TabletBreakPoint } from '../../const/breakPoint'

export const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.4rem 0.8rem 0 rgba(99, 99, 99, 0.2);
  padding: 1.5rem 2rem;

  h3 {
    color: ${({ theme }) => theme.colors.headers};
    font-size: ${({ theme }) => theme.fonts.text.large};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`
export const ClosedIcon = styled(IoCloseSharp)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.headers};
  width: 1.5rem;
  height: 1.5rem;
`

export const EmptyCartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5625rem;
  margin-top: 3rem;
`

export const CartItens = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4.6875rem);
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
  padding: 1.25rem;
  max-height: calc(100vh - 11.875rem);
`
export const CardProduct = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  li {
    display: flex;
    height: 6.75rem;
    gap: 0.625rem;
    align-items: center;
    border-bottom: 0.0625rem solid rgba(99, 99, 99, 0.2);
    padding: 0.75rem 0;
  }

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    border: 0.0625rem solid rgba(99, 99, 99, 0.2);
    padding: 0.5rem;
  }
`

export const WrapperNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoProducts = styled.div`
  display: flex;
  gap: 1.375rem;

  h2 {
    font-size: ${({ theme }) => theme.fonts.text.small};
    max-width: 2.8125rem;
  }
`

export const TitleCartProducts = styled.h3`
  display: flex;
  max-width: 16.875rem;
  font-size: ${({ theme }) => theme.fonts.text.small};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  @media (max-width: ${TabletBreakPoint}) {
    font-size: ${({ theme }) => theme.fonts.text.extraSmall};
  }
`
export const DescriptionAmount = styled.div`
  width: 25rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  cursor: pointer;

  @media (max-width: ${TabletBreakPoint}) {
    width: 15rem;
  }
`
export const Description = styled.span`
  color: ${({ theme }) => theme.colors.text.secondaryAccent};
  font-size: ${({ theme }) => theme.fonts.text.extraSmall};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 45ch;
  //TODO Verificar oq seria isso

  @media (max-width: ${TabletBreakPoint}) {
    font-size: ${({ theme }) => theme.fonts.text.errorSize};
  }
`
export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: ${({ theme }) => theme.fonts.text.small};
    width: 1.5rem;
    text-align: center;
  }

  @media (max-width: ${TabletBreakPoint}) {
    gap: 0.25rem;
    span {
      font-size: ${({ theme }) => theme.fonts.text.errorSize};
      width: 0.9375rem;
    }
  }
`
export const Total = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 0.625rem;
  padding: 0.625rem 1.875rem;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  bottom: 0;

  @media (max-width: ${TabletBreakPoint}) {
    padding: 0.625rem 1.5rem;
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
