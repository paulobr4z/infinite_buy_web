import styled from 'styled-components'

export const TitleCards = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.header.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-top: 4rem;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  margin-top: 2.4rem;
`
