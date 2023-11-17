import { ProductsProps } from '../../types'

interface CardProps {
  cardData: ProductsProps[]
}

export const Card = ({ cardData }: CardProps) => {
  console.log('aquiiiiiiiiiii', cardData)
  return (
    <>
      {cardData?.map((products) => (
        <div key={products?._id}>
          <img src={products?.images} alt={products?.name} />
          <h2>{products?.name}</h2>
          <p>${products?.price}</p>
        </div>
      ))}
    </>
  )
}
