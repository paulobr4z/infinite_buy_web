import { useEffect, useState } from 'react'
import * as S from './styled'

const promotionImages = [
  '/promo1.png',
  '/promo2.jpg',
  '/promo3.png',
  '/promo4.jpg',
]

export const Banner = () => {
  const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPromotionIndex(
        (prevIndex) => (prevIndex + 1) % promotionImages.length,
      )
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="container">
      <S.BannerContainer>
        <img
          src={promotionImages[currentPromotionIndex]}
          alt={`Promoção ${currentPromotionIndex + 1}`}
        />
      </S.BannerContainer>
    </div>
  )
}
