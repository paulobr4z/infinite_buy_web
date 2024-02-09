import { AppProvider } from './context'
import { InfinitBuyRoutes } from './routes/routes'

export const App = () => {
  return (
    <>
      <AppProvider>
        <InfinitBuyRoutes />
      </AppProvider>
    </>
  )
}
