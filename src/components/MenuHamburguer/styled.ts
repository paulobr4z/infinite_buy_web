import { IoCloseSharp } from 'react-icons/io5'
import { RxPerson } from 'react-icons/rx'
import styled from 'styled-components'

export const HeaderMenuHamburguer = styled.header`
  height: 10.9rem;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ContentMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 2.4rem;
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.65rem;
  width: 100%;
`

export const ContentDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h3 {
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p,
  a {
    color: #fff;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const Person = styled(RxPerson)`
  width: 32px;
  height: 32px;
  color: #fff;
`

export const ClosedIcon = styled(IoCloseSharp)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: #fff;
`
