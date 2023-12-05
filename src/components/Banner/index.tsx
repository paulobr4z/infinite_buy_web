import { useEffect, useState } from 'react'
import promo1 from '../../../public/promo1.png'
import promo2 from '../../../public/promo2.jpg'
import promo3 from '../../../public/promo3.png'
import promo4 from '../../../public/promo4.jpg'

import * as S from './styled'

const promotionImages = [promo1, promo2, promo3, promo4]
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
    <S.BannerContainer>
      <img
        src={promotionImages[currentPromotionIndex]}
        alt={`Promoção ${currentPromotionIndex + 1}`}
      />
    </S.BannerContainer>
  )
}
