import { useEffect, useState } from 'react'
import * as S from './styled'

export const InProduction = () => {
  const TypingEffect = (text: string) => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      if (currentIndex === text.length) {
        return
      }

      const typingInterval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 100)

      return () => {
        clearInterval(typingInterval)
      }
    }, [currentIndex])

    return (
      <div>
        <p>{displayText}</p>
      </div>
    )
  }
  return (
    <div>
      <S.Text>{TypingEffect('Em Produção!')}</S.Text>
    </div>
  )
}
