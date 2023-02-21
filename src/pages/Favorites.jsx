import { Outlet, useLocation } from 'react-router-dom'
import ProductPage from '../components/ProductPage'
import PageHistory from '../components/UI/PagesHistory'
import '../styles/c_styles/p_styles/favorites.scss'

const Favorites = () => {
  const location = useLocation()

  return (
    <section className="favorites">
      <div className="favorites__wrapper">
        <PageHistory />
        {location.pathname.includes('product-page') ? (
          <ProductPage />
        ) : (
          <>
            <div className="favorites__wrapper-top">
              <h3>Закладки</h3>
            </div>
            <div className="favorites__wrapper-content">
              <Outlet />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Favorites
