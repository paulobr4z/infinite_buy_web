import styled from 'styled-components'

export const TitleCards = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.header.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-top: 2.5rem;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.125rem;
  margin-top: 1.5rem;
`
