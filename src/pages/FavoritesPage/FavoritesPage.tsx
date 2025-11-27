import ProductCard from "blocks/ProductCard";
import { selectFavorites } from "features/Favorites/selector";
import { dummyProducts } from "pages/ProductDetailsPage/dummyProduct";
import { ProductGroupContainer } from "pages/HomePage/styled";
import { PageWrapper } from "App.styled";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const FavoritesPage: React.FC = () => {
    const idInFavorites = useSelector(selectFavorites);
   return (
    <>
      <Helmet>
        <title>Избранное - Маркетплейс</title>
        <meta name="description" content="Страница избранных товаров маркетплейса" />
      </Helmet>

      <PageWrapper>
        <h2>Избранное</h2>

        {idInFavorites.length ? (
          <ProductGroupContainer>
            {dummyProducts.filter((p) => idInFavorites.includes(p.id)).map((p) => (
              <ProductCard {...p} key={p.id} isLiked={false} hideLikes={true}/>
            ))}
          </ProductGroupContainer>
        ) : (
            <p>В избранном пока нет товаров</p>
        )}
      </PageWrapper>
    </>
  )
}

export default FavoritesPage