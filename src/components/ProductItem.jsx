import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import '../styles/c_styles/product-item.scss'

const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <div className="product-item__top">
        {item.onSale && item.inStock && <span>Скидка</span>}
        <a className="product-item__top-fav" href="#">
          <AiOutlineHeart />
        </a>
      </div>
      <a className="product-item__content" href="#">
        <img src={item.img} alt="backpack" />
        <h5>{item.title}</h5>
        <span>посмотреть товар</span>
      </a>
      <div className="product-item__bottom">
        <div className="product-item__bottom-cost">
          {item.inStock ? (
            <div className="product-item__bottom-cost_instock">
              <span>{item.price} ₽</span>
              {item.inStock && (
                <span>
                  {item.onSale && item.inStock && `${item.oldPrice} ₽`}
                </span>
              )}
            </div>
          ) : (
            <div className="product-item__bottom-cost_nostock">
              <span>Нет в наличии</span>
              <button>Сообщить о поступлении</button>
            </div>
          )}
        </div>
        {item.inStock && (
          <a className="product-item__bottom-incart" href="#">
            <AiOutlineShoppingCart />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProductItem
