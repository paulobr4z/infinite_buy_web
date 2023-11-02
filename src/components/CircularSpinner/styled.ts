import styled, { keyframes } from 'styled-components'

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.background.dark};
  border-top: 4px solid;
  border-top-color: ${({ theme }) => theme.colors.background.dark};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
