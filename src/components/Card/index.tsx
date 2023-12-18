import { CardProps } from '../../types'
import { Button } from '../Button'
import * as S from './styled'
import { formatCurrency } from '../../utils/formatCurrency'

export const Card = ({ cardData, onBuyClick }: CardProps) => {
  return (
    <>
      {cardData?.map((products) => (
        <S.CardContent key={products?._id}>
          <img src={products?.images} alt={products?.name} />
          <div>
            <h2>{products?.name}</h2>
            <p>{formatCurrency(products?.price)}</p>
          </div>

          <Button size="medium" onClick={() => onBuyClick(products._id)}>
            Comprar
          </Button>
        </S.CardContent>
      ))}
    </>
  )
}
