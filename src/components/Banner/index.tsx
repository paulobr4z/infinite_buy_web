import { useEffect, useState } from 'react'
import promo1 from '../../../public/promo1.png'
import promo2 from '../../../public/promo2.jpg'
import * as S from './styled'

const promotionImages = [promo1, promo2]
export const Banner = () => {
  const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPromotionIndex(
        (prevIndex) => (prevIndex + 1) % promotionImages.length,
      )
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <S.BannerContainer>
      <div className="container">
        <img
          src={promotionImages[currentPromotionIndex]}
          alt={`Promoção ${currentPromotionIndex + 1}`}
        />
      </div>
    </S.BannerContainer>
  )
}
