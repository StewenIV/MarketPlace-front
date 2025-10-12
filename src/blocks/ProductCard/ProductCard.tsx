import { Link } from 'react-router-dom'

import Button from 'components/Button'

import { ReactComponent as HearsEmpty } from 'img/heart-empty.svg'

import {
  Wrapper,
  LikeWrapper,
  Image,
  PriceRegular,
  PriceWrapper,
  PriceRegularWhenDisconted,
  PriceDisconted,
  Title,
  Desc
} from './styled'

interface I_ProductCardProps {
  id: number
  slug?: string
  imgSrc: string
  priceRegular: number
  priceDiscounted?: number
  title: string
  description: string
  //isLiked: boolean
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
  hideLikes = false
}) => {
  return (
    <Wrapper>
      {!hideLikes && (
        <LikeWrapper data-product-id={id}>
          <HearsEmpty />
        </LikeWrapper>
      )}
      <Link to={`/product/${slug || id}`}>
        <Image src={imgSrc} alt={title} />
      </Link>
      <PriceWrapper>
        {Number.isInteger(priceDiscounted) ? (
          <>
            <PriceDisconted>{priceDiscounted} Р</PriceDisconted>
            <PriceRegularWhenDisconted>
              {priceRegular} Р
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
      <Button disabled={true}>В корзину</Button>
    </Wrapper>
  )
}

export default ProductCard
