import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import { PageWrapper } from 'App.styled'
import { ProductGroup } from './styled'
import { ProductGroupContainer } from './styled'
import ProductCard from 'blocks/ProductCard/ProductCard'
import { selectFavorites } from 'features/Favorites/selector'
import { dummyProducts } from 'pages/ProductDetailsPage/dummyProduct'

const HomePage: React.FC = () => {
  const idInFavorites = useSelector(selectFavorites)
  console.log(ProductCard)
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
