import { Banner } from '../../components/Banner'
import { CardContainer } from '../../components/CardContainer'
import { MainLayout } from '../../components/MainLayout'

export const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <CardContainer />
    </MainLayout>
  )
}
