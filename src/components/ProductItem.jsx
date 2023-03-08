import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  cartSelector,
  deleteCartItem,
  fetchDeleteCartItem,
  fetchPostCartItem,
  setCartItem,
} from '../redux/slices/cartSlice'
import {
  deleteFavItem,
  favoriteItemSelector,
  fetchPostFavItem,
  fetchDeleteFavItem,
  setFavItems,
} from '../redux/slices/favoriteItemSlice'
import '../styles/c_styles/product-item.scss'

const ProductItem = ({ item }) => {
  const dispatch = useDispatch()
  const { id, img, title, price, oldPrice, onSale, inStock } = item
  const { favItems } = useSelector(favoriteItemSelector)
  const sendItem = { id, img, title, price, oldPrice, onSale, inStock }
  const { cart } = useSelector(cartSelector)

  const setFavItemHandler = () => {
    if (favItems.includes(title)) {
      dispatch(deleteFavItem(title))
      dispatch(fetchDeleteFavItem(id))
    } else {
      dispatch(setFavItems(title))
      dispatch(fetchPostFavItem(sendItem))
    }
  }

  const setCartItemHandler = () => {
    if (cart.includes(title)) {
      dispatch(deleteCartItem(title))
      dispatch(fetchDeleteCartItem(id))
    } else {
      dispatch(setCartItem(title))
      dispatch(fetchPostCartItem(sendItem))
    }
  }

  return (
    <div className="product-item">
      <div className="product-item__top">
        {onSale && inStock && <span>Скидка</span>}
        <button
          className={`product-item__top-fav ${
            favItems.includes(title) ? 'active' : ''
          }`}
          onClick={setFavItemHandler}
        >
          <AiOutlineHeart />
        </button>
      </div>
      <a className="product-item__content" href="#">
        <img src={img} alt="backpack" />
        <h5>{title}</h5>
        <span>посмотреть товар</span>
      </a>
      <div className="product-item__bottom">
        <div className="product-item__bottom-cost">
          {inStock ? (
            <div className="product-item__bottom-cost_instock">
              <span>{price} ₽</span>
              {inStock && <span>{onSale && inStock && `${oldPrice} ₽`}</span>}
            </div>
          ) : (
            <div className="product-item__bottom-cost_nostock">
              <span>Нет в наличии</span>
              <button>Сообщить о поступлении</button>
            </div>
          )}
        </div>
        {inStock && (
          <button
            className={`product-item__bottom-incart ${
              cart.includes(title) ? 'active' : ''
            }`}
            onClick={setCartItemHandler}
          >
            <AiOutlineShoppingCart />
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductItem
