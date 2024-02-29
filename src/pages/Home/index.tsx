import { useContext } from 'react'
import { Banner } from '../../components/Banner'
import { CardContainer } from '../../components/CardContainer'
import { Carousel } from '../../components/Carousel'
import { MainLayout } from '../../components/MainLayout'
import { ProductsContext } from '../../context/ProductsContext'

export const Home = () => {
  const { products } = useContext(ProductsContext)
  return (
    <MainLayout>
      <Banner />
      <CardContainer />
      <Carousel listProductsData={products} slidesToShow={4} />
    </MainLayout>
  )
}
