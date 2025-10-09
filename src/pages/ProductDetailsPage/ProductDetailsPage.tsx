import { Helmet } from 'react-helmet'

const ProductDetailsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Страница продукта</title>
        <meta name="description" content="Описание страницы продукта" />
      </Helmet>
      <h1>Страница продукта</h1>
    </>
  )
}

export default ProductDetailsPage
