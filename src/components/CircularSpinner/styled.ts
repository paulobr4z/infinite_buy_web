import styled, { keyframes } from 'styled-components'

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-top: 0.4rem solid;
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
