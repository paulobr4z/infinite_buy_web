import { CardProps } from '../../types'
import { Button } from '../Button'
import * as S from './styled'
import { formatCurrency } from '../../utils/formatCurrency'
import { routes } from '../../routes'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Card = ({ cardData, onBuyClick }: CardProps) => {
  const { isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <>
      {cardData?.map((product) => (
        <S.CardContent key={product?._id}>
          <img src={product?.images} alt={product?.name} />
          <div>
            <h2>{product?.name}</h2>
            <p>{formatCurrency(product?.price)}</p>
          </div>
          {isAuthenticated ? (
            <Button size="medium" onClick={() => onBuyClick(product)}>
              Comprar
            </Button>
          ) : (
            <Button size="medium" onClick={() => navigate(routes.login)}>
              Comprar
            </Button>
          )}
        </S.CardContent>
      ))}
    </>
  )
}
