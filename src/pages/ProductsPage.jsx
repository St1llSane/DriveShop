import PageHistory from '../components/UI/PageHistory'
import HeaderFilters from '../components/UI/HeaderFilters'
import Filters from '../components/UI/Filters'
import Products from '../components/Products'
import '../styles/c_styles/p_styles/products-page.scss'
import PageTop from '../components/UI/PageTop'

const ProductsPage = () => {
  return (
    <section className="products-page">
      <PageHistory />
      <PageTop>Гидроциклы</PageTop>
      <HeaderFilters />
      <div className="products-page__wrapper">
        <Filters />
        <Products />
      </div>
    </section>
  )
}

export default ProductsPage
