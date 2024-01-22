import { Banner } from '../../components/Banner'
import { CardContainer } from '../../components/CardContainer'
import { MainLayout } from '../../components/MainLayout'
import { SideBar } from '../../components/SideBar'

export const Home = () => {
  return (
    <>
      <SideBar />
      <MainLayout>
        <Banner />
        <CardContainer />
      </MainLayout>
    </>
  )
}
