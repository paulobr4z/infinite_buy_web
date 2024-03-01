import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ProductsProps {
  _id: string
  amount: number
  name: string
  images: string
  price: number
  description: string
  discount: number
}

export interface CardProps {
  product: ProductsProps
  onBuyClick: (productId: ProductsProps) => void
}

export interface ButtonCategorieProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  color?: string
  loading?: boolean
  children?: ReactNode
}

export interface ButtonContainerProps {
  size: 'small' | 'medium' | 'large'
}

export interface InputContainerProps {
  size: 'medium' | 'large'
}
