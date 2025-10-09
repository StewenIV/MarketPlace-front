import { Suspense, Fragment } from 'react'

import PublicRoutes from 'routes/PublicRoutes'
import PrivateRoutes from 'routes/PrivateRoutes'

import Header from 'features/Header'
import { AppStyles, Footer } from './App.styled'

export const App = () => {
  return (
    <Fragment>
      <AppStyles />

      <Header />

      <Suspense fallback={'Loading...'}>
        <PublicRoutes />
        <PrivateRoutes />
      </Suspense>

      <Footer>
        <div>Маркетплейс мой</div>
      </Footer>
    </Fragment>
  )
}

export default App
