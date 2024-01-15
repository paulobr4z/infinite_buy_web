import { ReactNode } from 'react'
import { MessageErrorsContainer } from './styled'

interface MessageErrorsContainerProps {
  children: ReactNode
}
export const MessageErrors = ({ children }: MessageErrorsContainerProps) => {
  return <MessageErrorsContainer> {children}</MessageErrorsContainer>
}
