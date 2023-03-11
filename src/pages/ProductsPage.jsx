import { useLocation } from 'react-router-dom'
import PageHistory from '../components/UI/PageHistory'
import HeaderFilters from '../components/UI/HeaderFilters'
import PageTop from '../components/UI/PageTop'
import ProductsBase from '../components/ProductsBase'
import '../styles/c_styles/p_styles/products-page.scss'

const ProductsPage = () => {
  const location = useLocation()
  const notProductPage = location.pathname.slice(1).split('/').length === 1

  return (
    <section className="products-page">
      <PageHistory />
      {notProductPage && (
        <>
          <PageTop>Гидроциклы</PageTop>
          <HeaderFilters />
        </>
      )}
      <div className={`${notProductPage ? 'products-page__wrapper' : ''}`}>
        <ProductsBase />
      </div>
    </section>
  )
}

export default ProductsPage
