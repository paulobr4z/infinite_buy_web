import { CardProps } from '../../types'
import { Button } from '../Button'
import * as S from './styled'
import { formatCurrency } from '../../utils/formatCurrency'

export const Card = ({ cardData, onBuyClick }: CardProps) => {
  return (
    <>
      {cardData?.map((product) => (
        <S.CardContent key={product?._id}>
          <img src={product?.images} alt={product?.name} />
          <div>
            <h2>{product?.name}</h2>
            <p>{formatCurrency(product?.price)}</p>
          </div>
          <Button size="medium" onClick={() => onBuyClick(product)}>
            Comprar
          </Button>
        </S.CardContent>
      ))}
    </>
  )
}
