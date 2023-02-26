import { Outlet, useLocation } from 'react-router-dom'
import PageHistory from '../components/UI/PageHistory'
import PageTop from '../components/UI/PageTop'
import '../styles/c_styles/p_styles/favorites.scss'

const Favorites = () => {
  const location = useLocation()

  return (
    <section className="favorites">
      <div className="favorites__wrapper">
        <PageHistory />
        {location.pathname.includes('product-page') ? (
          <Outlet />
        ) : (
          <>
            <PageTop>Закладки</PageTop>
            <div className="favorites__wrapper-content"></div>
          </>
        )}
      </div>
    </section>
  )
}

export default Favorites
