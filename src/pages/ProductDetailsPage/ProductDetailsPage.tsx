import { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import { addtoFavorites, removeFromFavorites } from 'features/Favorites/reducer'
import { selectFavorites } from 'features/Favorites/selector'
import { dummyProducts } from './dummyProduct'
import { I_ProductDetails } from './types'
import { ReactComponent as HeartEmpty } from 'img/heart-empty.svg'
import { ReactComponent as HeartFilled } from 'img/heart-filled.svg'

import {
  Wrapper,
  LikeWrapper,
  ImagesWrapper,
  Image,
  InfoWrapper,
  PriceWrapper,
  PriceRegular,
  PriceRegularWhenDiscounted,
  PriceDiscounted
} from './styled'

import { PageWrapper } from 'App.styled'

const ProductDetailsPage: React.FC = () => {
  const params = useParams()
  const dispatch = useDispatch<any>()

  const [ProductDetails, setProductDetails] = useState<I_ProductDetails | null>(
    null
  )

  useEffect(() => {
    const found = dummyProducts.find((p) =>
      [String(p.id), p.slug].includes(params.idOrSlug)
    )

    if (found) {
      setProductDetails(found)
    }
  }, [params.idOrSlug])

  const idsInFavorites = useSelector(selectFavorites)

  const isLiked = useMemo(() => {
    return idsInFavorites.includes(ProductDetails?.id!)
  }, [idsInFavorites, ProductDetails])

  const handleFavorites = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const { productId } = e.currentTarget.dataset

      dispatch(
        !idsInFavorites.includes(+productId!)
          ? addtoFavorites(+productId!)
          : removeFromFavorites(+productId!)
      )
    },
    [dispatch, idsInFavorites]
  )

  if (!ProductDetails) return null

  const { id, imgSrc, title, description, priceRegular, priceDiscounted } =
    ProductDetails

  return (
    <>
      <Helmet>
        <title>Главная - KPL Market</title>
        <meta name="description" content="Описание страницы продукта" />
      </Helmet>
      <h1>Страница продукта</h1>
      <PageWrapper>
        <Wrapper>
          <ImagesWrapper>
            <Image src={imgSrc} alt={title} />

            <LikeWrapper data-product-id={id} onClick={handleFavorites}>
              {isLiked ? <HeartFilled /> : <HeartEmpty />}
            </LikeWrapper>
          </ImagesWrapper>

          <InfoWrapper>
            <h1>{title}</h1>
            <p>{description}</p>

            <PriceWrapper>
              {Number.isInteger(priceDiscounted) ? (
                <>
                  <PriceDiscounted>{priceDiscounted} ₽</PriceDiscounted>
                  <PriceRegularWhenDiscounted>
                    {priceRegular} ₽
                  </PriceRegularWhenDiscounted>
                </>
              ) : (
                <PriceRegular>{priceRegular} ₽</PriceRegular>
              )}
            </PriceWrapper>
          </InfoWrapper>
        </Wrapper>
      </PageWrapper>
    </>
  )
}

export default ProductDetailsPage
