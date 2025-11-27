import { Link, useLocation } from 'react-router-dom'

import Button from 'components/Button/Button'

import { ReactComponent as HearsEmpty } from 'img/heart-empty.svg'
import { ReactComponent as HeartFilled } from 'img/heart-filled.svg'

import {
  Wrapper,
  LikeWrapper,
  Image,
  PriceRegular,
  PriceWrapper,
  PriceRegularWhenDisconted,
  PriceDisconted,
  Title,
  BtnWrapper,
  Desc
} from './styled'
import { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { addtoFavorites, removeFromFavorites } from 'features/Favorites/reducer'
import { paths } from 'routes/helper'

interface I_ProductCardProps {
  id: number
  slug?: string
  imgSrc: string
  priceRegular: number
  priceDiscounted?: number
  title: string
  description: string
  isLiked: boolean
  hideLikes?: boolean
}

const ProductCard: React.FC<I_ProductCardProps> = ({
  id,
  slug,
  imgSrc,
  priceRegular,
  priceDiscounted,
  title,
  description,
  isLiked,
  hideLikes = false
}) => {
  const dispatch = useDispatch<any>()
  const location = useLocation()

  const isFavoritesPage = useMemo(
    () => location.pathname === paths.favorites,
    [location.pathname]
  )

  const removeFavorite = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      dispatch(removeFromFavorites(+e.currentTarget.dataset.productId!))
    },
    [dispatch]
  )

  const handleFavorites = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const { productId } = e.currentTarget.dataset

      dispatch(
        !isLiked
          ? addtoFavorites(+productId!)
          : removeFromFavorites(+productId!)
      )
    },
    [dispatch, isLiked]
  )

  return (
    <Wrapper>
      {!hideLikes && (
        <LikeWrapper data-product-id={id} onClick={handleFavorites}>
          {isLiked ? <HeartFilled /> : <HearsEmpty />}
        </LikeWrapper>
      )}

      <Link to={`/product/${slug || id}`}>
        <Image src={imgSrc} alt={title} />
      </Link>
      <PriceWrapper>
        {Number.isInteger(priceDiscounted) ? (
          <>
            <PriceDisconted>{priceDiscounted} ₽</PriceDisconted>
            <PriceRegularWhenDisconted>
              {priceRegular} ₽
            </PriceRegularWhenDisconted>
          </>
        ) : (
          <PriceRegular>{priceRegular} Р</PriceRegular>
        )}
      </PriceWrapper>
      <Title className="h4">
        <Link to={`/product/${slug || id}`}>{title}</Link>
      </Title>
      <Desc>{description}</Desc>
      <BtnWrapper>
        <Button block>В корзину</Button>

        {isFavoritesPage && (
          <Button
            type="danger"
            block
            onClick={removeFavorite}
            data-product-id={id}
          >
            Удалить
          </Button>
        )}
      </BtnWrapper>
    </Wrapper>
  )
}

export default ProductCard
