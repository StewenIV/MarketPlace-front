import { Helmet } from 'react-helmet'
import { useAppSelector } from 'store'

import { PageWrapper } from 'App.styled'
import { ProductGroup } from './styled'
import { ProductGroupContainer } from './styled'
import ProductCard from 'blocks/ProductCard/ProductCard'
import { selectFavorites } from 'features/Favorites/selector'
import { get } from 'helpers/request'
//import { dummyProducts } from 'pages/ProductDetailsPage/dummyProduct'
import { useEffect, useState } from 'react'
import { I_UniRes } from 'type'

const HomePage: React.FC = () => {
  const idInFavorites = useAppSelector(selectFavorites)

  const [products, setProducts] = useState<any[]>()

  useEffect(() => {
    get('/products').then((res: I_UniRes) => setProducts(res.data))
  }, [])


  if (!products) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Helmet>
        <title>Главная - Marketplace</title>
        <meta name="description" content="Главная страница маркетплейса" />
      </Helmet>

      <PageWrapper>
        <ProductGroup>
          <h2>Рекомендуемые товары</h2>
          <ProductGroupContainer>
            {products.map((p: any) => (
              <ProductCard
                {...p}
                key={p.id}
                isLiked={idInFavorites.includes(p.id)}
              />
            ))}
          </ProductGroupContainer>
        </ProductGroup>
      </PageWrapper>
    </>
  )
}

export default HomePage
