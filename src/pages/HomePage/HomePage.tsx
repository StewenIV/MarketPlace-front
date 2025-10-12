import { Helmet } from 'react-helmet'

import { PageWrapper } from 'App.styled'
import { ProductGroup } from './styled'
import { ProductGroupContainer } from './styled'
import ProductCard from 'blocks/ProductCard/ProductCard'
import { dummyProducts } from 'pages/ProductDetailsPage/dummyProduct'

const HomePage: React.FC = () => {
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
            {dummyProducts.map((p) => (
              <ProductCard {...p} key={p.id} />
            ))}
          </ProductGroupContainer>
        </ProductGroup>
      </PageWrapper>
    </>
  )
}

export default HomePage
