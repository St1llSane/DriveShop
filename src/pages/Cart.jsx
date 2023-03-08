import { useDispatch, useSelector } from 'react-redux'
import { cartSelector, fetchGetCartItem } from '../redux/slices/cartSlice'
import { useEffect } from 'react'
import PageBase from './PageBase'
import PageTop from '../components/UI/PageTop'
import ProductItem from '../components/ProductItem'
import '../styles/c_styles/p_styles/cart.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const { cart, fetchedCart } = useSelector(cartSelector)

  useEffect(() => {
    dispatch(fetchGetCartItem())
  }, [cart])

  return (
    <PageBase>
      <PageTop>Корзина</PageTop>
      {fetchedCart.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </PageBase>
  )
}

export default Cart
