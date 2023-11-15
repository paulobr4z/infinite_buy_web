interface CardProps {
  name: string
  images: string
  price: number
}

export const Card: React.FC<CardProps> = ({ name, images, price }) => {
  return (
    <div>
      <img src={images} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  )
}
