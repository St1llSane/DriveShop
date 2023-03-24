import { useGetFavoritesQuery } from '../redux/api/DriveShopApi'
import ProductItem from '../components/ProductItem'
import PageTop from '../components/UI/PageTop'
import PageBase from './PageBase'
import ProductItemSkeleton from '../components/UI/ProductItemSkeleton'
import '../styles/c_styles/p_styles/favorites.scss'

const Favorites = () => {
  const { data = [], isLoading } = useGetFavoritesQuery()

  const skeleton = [...new Array(3).keys()].map((key) => (
    <ProductItemSkeleton key={key} />
  ))

  const content = data.map((item) => <ProductItem item={item} key={item.id} />)

  return (
    <PageBase>
      <PageTop>Закладки</PageTop>
      {isLoading ? skeleton : content}
    </PageBase>
  )
}

export default Favorites
