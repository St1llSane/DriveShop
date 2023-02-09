import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import '../styles/c_styles/popular-item.scss'

const PopularItem = () => {
  return (
    <div className="popular-item">
      <div className="popular-item__top">
        <span>Скидка</span>
        <a className="popular-item__top-fav" href="#">
          <AiOutlineHeart />
        </a>
      </div>
      <a className="popular-item__content" href="#">
        <img src="./images/items/backpack.png" alt="backpack" />
        <h5>Водонепроницаемый рюкзак</h5>
				<span>посмотреть товар</span>
      </a>
      <div className="popular-item__bottom">
        <span className="popular-item__bottom-cost">9 800 ₽</span>
        <a className="popular-item__bottom-incart" href="#">
          <AiOutlineShoppingCart />
        </a>
      </div>
    </div>
  )
}

export default PopularItem
