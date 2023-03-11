import PageHistory from '../components/UI/PageHistory'
import HeaderFilters from '../components/UI/HeaderFilters'
import PageTop from '../components/UI/PageTop'
import ProductsBase from '../components/ProductsBase'
import '../styles/c_styles/p_styles/products-page.scss'

const ProductsPage = () => {
  return (
    <section className="products-page">
      <PageHistory />
      <PageTop>Гидроциклы</PageTop>
      <HeaderFilters />
      <div className="products-page__wrapper">
        <ProductsBase />
      </div>
    </section>
  )
}

export default ProductsPage
