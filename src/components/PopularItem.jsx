import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import '../styles/c_styles/popular-item.scss'

const PopularItem = ({ item }) => {
  return (
    <div className="popular-item">
      <div className="popular-item__top">
        {item.onSale && item.inStock && <span>Скидка</span>}
        <a className="popular-item__top-fav" href="#">
          <AiOutlineHeart />
        </a>
      </div>
      <a className="popular-item__content" href="#">
        <img src={item.img} alt="backpack" />
        <h5>{item.title}</h5>
        <span>посмотреть товар</span>
      </a>
      <div className="popular-item__bottom">
        <div className="popular-item__bottom-cost">
          <span>{item.inStock ? `${item.price} ₽` : 'Нет в наличии'}</span>
					<span>{item.onSale && item.inStock && `${item.oldPrice} ₽`}</span>
        </div>
        {item.inStock && (
          <a className="popular-item__bottom-incart" href="#">
            <AiOutlineShoppingCart />
          </a>
        )}
      </div>
    </div>
  )
}

export default PopularItem
