import { useGetCartQuery } from '../redux/api/DriveShopApi'
import PageBase from './PageBase'
import PageTop from '../components/UI/PageTop'
import ProductItem from '../components/ProductItem'
import '../styles/c_styles/p_styles/cart.scss'

const Cart = () => {
  const { data = [] } = useGetCartQuery()

  return (
    <PageBase>
      <PageTop>Корзина</PageTop>
      {data.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </PageBase>
  )
}

export default Cart
