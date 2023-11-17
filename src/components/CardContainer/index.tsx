import { useEffect, useState } from 'react'
import { cardProducts } from '../../services'
import { ProductsProps } from '../../types'
import { Card } from '../Card'

export const CardContainer: React.FC = () => {
  const [products, setProducts] = useState<ProductsProps[]>([])
  console.log(products)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await cardProducts()

        setProducts(response.data)
        console.log('response', response)
      } catch (error) {
        console.error('Error fetching card data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <Card cardData={products} />
    </div>
  )
}
