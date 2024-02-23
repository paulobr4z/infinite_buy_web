import { styled } from 'styled-components'

export const MessageErrorsContainer = styled.span`
  color: ${({ theme }) => theme.colors.emphasis.error};
  font-size: ${({ theme }) => theme.fonts.text.errorSize};
  text-align: start;
  padding-left: 1.25rem;
`
