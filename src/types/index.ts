export interface ProductsProps {
  _id: string
  amount: number | undefined
  name: string
  images: string
  price: number
  description: string
  discount: number
}

export interface CardProps {
  cardData: ProductsProps[]
  onBuyClick: (productId: string) => void
}
