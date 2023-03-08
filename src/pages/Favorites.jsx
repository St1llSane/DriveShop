import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  favoriteItemSelector,
  fetchGetFavItem,
} from '../redux/slices/favoriteItemSlice'
import ProductItem from '../components/ProductItem'
import PageTop from '../components/UI/PageTop'
import PageBase from './PageBase'
import '../styles/c_styles/p_styles/favorites.scss'

const Favorites = () => {
  const dispatch = useDispatch()
  const { favItems, fetchedItems } = useSelector(favoriteItemSelector)

  useEffect(() => {
    dispatch(fetchGetFavItem())
  }, [favItems])

  return (
    <PageBase>
      <PageTop>Закладки</PageTop>
      {fetchedItems.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </PageBase>
  )
}

export default Favorites
