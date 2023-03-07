import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  favoriteItemSelector,
  fetchGetFavItem,
} from '../redux/slices/favoriteItemSlice'
import ProductItem from '../components/ProductItem'
import PageHistory from '../components/UI/PageHistory'
import PageTop from '../components/UI/PageTop'
import '../styles/c_styles/p_styles/favorites.scss'

const Favorites = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { fetchedItems } = useSelector(favoriteItemSelector)

  useEffect(() => {
    dispatch(fetchGetFavItem())
  }, [])

  return (
    <>
      <PageHistory />
      {!location.pathname.includes('product-page') ? (
        <section className="favorites">
          <PageTop>Закладки</PageTop>
          <div className="favorites__wrapper">
            {fetchedItems.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </div>
        </section>
      ) : (
        ''
      )}
    </>
  )
}

export default Favorites
