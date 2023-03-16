import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useBuyButton } from '../hooks/useBuyButton'
import { useFavButton } from '../hooks/useFavButton'
import { cartSelector } from '../redux/slices/cartSlice'
import { setCurrentProduct } from '../redux/slices/currentProductSlice'
import { favoriteItemSelector } from '../redux/slices/favoriteItemSlice'
import '../styles/c_styles/product-item.scss'

const ProductItem = ({ item }) => {
  const dispatch = useDispatch()
  const { id, img, title, engTitle, price, oldPrice, onSale, inStock } = item
  const { favItems } = useSelector(favoriteItemSelector)
  const { favButtonHandler } = useFavButton()
  const { cart } = useSelector(cartSelector)
  const { buyButtonHandler } = useBuyButton()
  const sendItem = {
    id,
    img,
    title,
    engTitle,
    price,
    oldPrice,
    onSale,
    inStock,
  }

  const setFavItemHandler = async () => {
    favButtonHandler(title, id, sendItem)
  }

  const setCartItemHandler = async () => {
    buyButtonHandler(title, id, sendItem)
  }

  const setCurrentProductHandler = () => {
    dispatch(setCurrentProduct(sendItem))
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
      <Link
        className="product-item__content"
        to={engTitle}
        onClick={setCurrentProductHandler}
      >
        <img src={img} alt={title} />
        <h5>{title}</h5>
        <span>посмотреть товар</span>
      </Link>
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
