import { useDispatch, useSelector } from 'react-redux'
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from '../redux/api/DriveShopApi'
import {
  deleteFavItem,
  favoriteItemSelector,
  setFavItems,
} from '../redux/slices/favoriteItemSlice'

export const useFavButton = () => {
  const dispatch = useDispatch()
  const { favItems } = useSelector(favoriteItemSelector)
  const [addFavorite] = useAddFavoriteMutation()
  const [deleteFavorite] = useDeleteFavoriteMutation()

  const favButtonHandler = async (title, id, item) => {
    if (favItems.includes(title)) {
      dispatch(deleteFavItem(title))
      await deleteFavorite(id)
    } else {
      dispatch(setFavItems(title))
      await addFavorite(item)
    }
  }

  return { favButtonHandler }
}
