import styled from 'styled-components'

export const ContainerCarouselPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
`

export const NumberButton = styled.button`
  font-size: ${({ theme }) => theme.fonts.text.medium};
  color: ${({ theme }) => theme.colors.black};
`
