import { SpinnerContainer } from './styled'

interface CorProps {
  cor: string
}

export const CircularSpinner = ({ cor }: CorProps) => {
  const spinnerStyle = {
    borderColor: cor,
    borderTopColor: 'transparent',
  }

  return <SpinnerContainer style={spinnerStyle}></SpinnerContainer>
}
