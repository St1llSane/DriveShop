import { useDispatch, useSelector } from 'react-redux'
import {
  useAddCartItemMutation,
  useDeleteCartItemMutation,
} from '../redux/api/DriveShopApi'
import {
  cartSelector,
  deleteCartItem,
  setCartItem,
} from '../redux/slices/cartSlice'

export const useBuyButton = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector(cartSelector)
  const [addCartItem] = useAddCartItemMutation()
  const [deleteFromCart] = useDeleteCartItemMutation()

  const buyButtonHandler = async (title, id, item) => {
    if (cart.includes(title)) {
      dispatch(deleteCartItem(title))
      await deleteFromCart(id)
    } else {
      dispatch(setCartItem(title))
      await addCartItem(item)
    }
  }

  return { buyButtonHandler }
}
