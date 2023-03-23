import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useBuyButton } from '../hooks/useBuyButton'
import { useFavButton } from '../hooks/useFavButton'
import { cartSelector } from '../redux/slices/cartSlice'
import { setCurrentProduct } from '../redux/slices/currentProductSlice'
import { favoriteItemSelector } from '../redux/slices/favoriteItemSlice'
import '../styles/c_styles/product-item.scss'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { id, img, title, engTitle, price, oldPrice, onSale, inStock } =
    props.item
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

  const numFormater = new Intl.NumberFormat(undefined, {
    currency: 'RUB',
    style: 'currency',
    maximumFractionDigits: 0,
  })

  const setFavItemHandler = async () => {
    await favButtonHandler(title, id, sendItem)
  }

  const setCartItemHandler = async () => {
    await buyButtonHandler(title, id, sendItem)
  }

  const setCurrentProductHandler = () => {
    dispatch(setCurrentProduct(sendItem))
  }

  return (
    <div
      className={`product-item ${props.popular ? props.popular : ''} ${
        props.activeGrid ? props.activeGrid : ''
      }`}
    >
      <div className="product-item__wrapper">
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
          {inStock ? (
            <div className="product-item__bottom-instock">
              <span>{numFormater.format(price)}</span>
              {inStock && (
                <span>
                  {onSale && inStock && `${numFormater.format(price)}`}
                </span>
              )}
            </div>
          ) : (
            <div className="product-item__bottom-nostock">
              <span>Нет в наличии</span>
              <button>Сообщить о поступлении</button>
            </div>
          )}
        </div>
        {inStock && (
          <button
            className={`product-item__incart ${
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
