import { useGetCartQuery } from '../redux/api/DriveShopApi'
import PageBase from './PageBase'
import PageTop from '../components/UI/PageTop'
import ProductItem from '../components/ProductItem'
import ProductItemSkeleton from '../components/UI/ProductItemSkeleton'
import '../styles/c_styles/p_styles/cart.scss'

const Cart = () => {
  const { data = [], isLoading } = useGetCartQuery()

  const skeleton = [...new Array(3).keys()].map((key) => (
    <ProductItemSkeleton key={key} />
  ))

  const content = data.map((item) => <ProductItem item={item} key={item.id} />)

  return (
    <PageBase>
      <PageTop>Корзина</PageTop>
      {data.length === 0 ? (
        <h4>Корзина пуста</h4>
      ) : isLoading ? (
        skeleton
      ) : (
        content
      )}
    </PageBase>
  )
}

export default Cart
