import ProductCard from "blocks/ProductCard";
import { selectFavorites } from "features/Favorites/selector";
import { dummyProducts } from "pages/ProductDetailsPage/dummyProduct";
import { ProductGroupContainer } from "pages/HomePage/styled";
import { PageWrapper } from "App.styled";
import { useAppSelector } from "store";
import { useEffect, useState } from "react";
import { get } from "helpers/request";

import { Helmet } from "react-helmet";
import { I_UniRes } from "type";

const FavoritesPage: React.FC = () => {
    const idInFavorites = useAppSelector(selectFavorites);

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
         <title>Избранное - Маркетплейс</title>
         <meta
           name="description"
           content="Страница избранных товаров маркетплейса"
         />
       </Helmet>

       <PageWrapper>
         <h2>Избранное</h2>

         {idInFavorites.length ? (
           <ProductGroupContainer>
             {products
               .filter((p) => idInFavorites.includes(p.id))
               .map((p) => (
                 <ProductCard
                   {...p}
                   key={p.id}
                   isLiked={false}
                   hideLikes={true}
                 />
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