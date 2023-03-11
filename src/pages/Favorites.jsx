import { useGetFavoritesQuery } from '../redux/api/DriveShopApi'
import ProductItem from '../components/ProductItem'
import PageTop from '../components/UI/PageTop'
import PageBase from './PageBase'
import '../styles/c_styles/p_styles/favorites.scss'

const Favorites = () => {
  const { data = [] } = useGetFavoritesQuery()

  return (
    <PageBase>
      <PageTop>Закладки</PageTop>
      {data.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </PageBase>
  )
}

export default Favorites
