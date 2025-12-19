import { Suspense, Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import { paths } from 'routes/helper'
import PublicRoutes from 'routes/PublicRoutes'
import PrivateRoutes from 'routes/PrivateRoutes'

import Header from 'features/Header'
import { ToastContainer } from 'react-toastify'
import { AppStyles, Footer } from './App.styled'

export const App = () => {
  const location = useLocation()

  const notIsAuthPage = ![paths.login, paths.register].includes(
    location.pathname
  )

  return (
    <>
      <AppStyles />
      <ToastContainer />
      {notIsAuthPage && <Header />}

      <Suspense fallback={'Loading...'}>
        <PublicRoutes />
        <PrivateRoutes />
      </Suspense>

      {notIsAuthPage && (
        <Footer>
          <div>© Маркетплейс MW</div>
        </Footer>
      )}
    </>
  )
}

export default App
