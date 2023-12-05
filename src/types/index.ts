export interface ProductsProps {
  _id: string
  name: string
  images: string
  price: number
}

export interface CardProps {
  cardData: ProductsProps[]
}
