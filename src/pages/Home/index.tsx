import { Banner } from '../../components/Banner'
import { CardContainer } from '../../components/CardContainer'
import { MainLayout } from '../../components/MainLayout'
import { useProductsContext } from '../../context/ProductsContext'
import { Carousel } from '../../components/Carousel'

export const Home = () => {
  const { products } = useProductsContext()
  return (
    <MainLayout>
      <Banner />
      <CardContainer />
      <Carousel slidesToShow={4} listProductsData={products} />
    </MainLayout>
  )
}
