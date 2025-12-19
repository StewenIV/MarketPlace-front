import { useState, useEffect, useCallback, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { get } from 'helpers/request'

import { addtoFavorites, removeFromFavorites } from 'features/Favorites/reducer'
import { selectFavorites } from 'features/Favorites/selector'
//import { dummyProducts } from './dummyProduct'
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
import { I_UniRes } from 'types'

const ProductDetailsPage: React.FC = () => {
  const params = useParams()
  const dispatch = useAppDispatch()

  const [ProductDetails, setProductDetails] = useState<I_ProductDetails | null>(
    null
  )

  useEffect(() => {
    get(`/products/${params.idOrSlug}`).then((res: I_UniRes) =>
      setProductDetails(res.data.productData)
    )
  }, [params.idOrSlug])

  const idsInFavorites = useAppSelector(selectFavorites)

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

  const { id, image, title, description, priceRegular, priceDiscounted } =
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
            <Image
              src={`${process.env.REACT_APP_API_URL}/images/products/${image}`}
              alt={title}
            />

            <LikeWrapper data-product-id={id} onClick={handleFavorites}>
              {isLiked ? <HeartFilled /> : <HeartEmpty />}
            </LikeWrapper>
          </ImagesWrapper>

          <InfoWrapper>
            <h1>{title}</h1>

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

            <p>{description}</p>
          </InfoWrapper>
        </Wrapper>
      </PageWrapper>
    </>
  )
}

export default ProductDetailsPage
