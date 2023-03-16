import { useSelector } from 'react-redux'
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { IoStatsChartSharp } from 'react-icons/io5'
import { currentProductSelector } from '../redux/slices/currentProductSlice'
import { favoriteItemSelector } from '../redux/slices/favoriteItemSlice'
import { cartSelector } from '../redux/slices/cartSlice'
import { useFavButton } from '../hooks/useFavButton'
import { useBuyButton } from '../hooks/useBuyButton'
import PopularSlider from '../components/PopularSlider'
import '../styles/c_styles/p_styles/current-product.scss'

const CurrentProduct = () => {
  const { currentProduct } = useSelector(currentProductSelector)
  const { id, img, title, engTitle, price, oldPrice, onSale, inStock } =
    currentProduct
  const { favItems } = useSelector(favoriteItemSelector)
  const { favButtonHandler } = useFavButton()
  const { cart } = useSelector(cartSelector)
  const { buyButtonHandler } = useBuyButton()

  const setFavItemHandler = async () => {
    favButtonHandler(title, id, currentProduct)
  }

  const setCartItemHandler = async () => {
    buyButtonHandler(title, id, currentProduct)
  }

  return (
    <section className="current-product">
      <div className="current-product__content">
        <div className="current-product__content-left">
          <span className="current-product__content_sale">Скидка</span>
          <img
            className="current-product__content_img"
            src={`.${img}`}
            alt={title}
          />
          <div className="current-product__content_price">
            <span>{oldPrice} ₽</span>
            <span>{price} ₽</span>
            <button>Нашли дешевле? Снизим цену!</button>
          </div>
        </div>
        <div className="current-product__content-right">
          <div className="current-product__content_header">
            <h2>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
            <span>Код товара: 366666-2 </span>
            <ul>
              <li>
                <button
                  className={`current-product__content_header-fav ${
                    favItems.includes(currentProduct.title) ? 'active' : ''
                  }`}
                  onClick={setFavItemHandler}
                >
                  <AiOutlineHeart />
                </button>
              </li>
              <li>
                <button>
                  <IoStatsChartSharp />
                </button>
              </li>
              <li>
                <button>
                  <AiFillStar />
                </button>
                <button>
                  <AiFillStar />
                </button>
                <button>
                  <AiFillStar />
                </button>
                <button>
                  <AiFillStar />
                </button>
                <button>
                  <AiFillStar />
                </button>
              </li>
            </ul>
          </div>
          <div className="current-product__content_about">
            <div className="current-product__content_about-tabs">
              <button className="active">Характеристики</button>
              <button>Наличие в магазине</button>
            </div>
            <div className="current-product__content_about-content">
              <ul>
                <li>
                  <span>Производитель</span>
                  <span>Канада</span>
                </li>
                <li>
                  <span>Количество мест, шт: </span>
                  <span>3</span>
                </li>
                <li>
                  <span>Мощность, л.с.</span>
                  <span>155</span>
                </li>
                <li>
                  <span>Тип двигателя</span>
                  <span>Бензиновый</span>
                </li>
                <li>
                  <span>Год выпуска</span>
                  <span>2018</span>
                </li>
              </ul>
              <button>Показать еще</button>
            </div>
          </div>
          <button
            className={`current-product__content-right_buy ${
              cart.includes(currentProduct.title) ? 'active' : ''
            }`}
            onClick={setCartItemHandler}
          >
            Купить
          </button>
        </div>
      </div>
      <div className="current-product__info">
        <ul className="current-product__info-tabs">
          <li>
            <button>О товаре</button>
          </li>
          <li>
            <button>Характеристики</button>
          </li>
          <li>
            <button>Отзывы</button>
          </li>
          <li>
            <button className="active">Самовывоз</button>
          </li>
          <li>
            <button>Доставка</button>
          </li>
          <li>
            <button>Cервис</button>
          </li>
          <li>
            <button>Гарантия</button>
          </li>
        </ul>
        <div className="current-product__info-content">
          <div className="current-product__info-content_pickup">
            <ul>
              <li>
                <h4>Адрес</h4>
              </li>
              <li>Москва, ул. Науки 25</li>
              <li>Москва, ул. Южная 134</li>
              <li>Санкт-Петербург, ул. Красная 19</li>
              <li>Киев, ул Шевченко 167</li>
            </ul>
            <ul className="current-product__info-content_pickup-time">
              <li>
                <h4>Режим работы</h4>
              </li>
              <li>
                <span>пн-сб:</span>
                <span>08:00-19:00</span>
                <span>вс:</span>
                <span>09:00-17:00</span>
              </li>
              <li>
                <span>пн-сб:</span>
                <span>08:00-19:00</span>
                <span>вс:</span>
                <span>09:00-17:00</span>
              </li>
              <li>
                <span>пн-сб:</span>
                <span>08:00-19:00</span>
                <span>вс:</span>
                <span>09:00-17:00</span>
              </li>
              <li>
                <span>пн-сб:</span>
                <span>08:00-19:00</span>
                <span>вс:</span>
                <span>09:00-17:00</span>
              </li>
            </ul>
            <ul>
              <li>
                <h4>Доступно</h4>
              </li>
              <li>В наличии</li>
              <li>В наличии</li>
              <li>В наличии</li>
              <li>В наличии</li>
            </ul>
            <ul>
              <li>
                <h4>Количество</h4>
              </li>
              <li>1</li>
              <li>2</li>
              <li>1</li>
              <li>4</li>
            </ul>
            <ul className="current-product__info-content_pickup-buy">
              <li>
                <h4>Купить</h4>
              </li>
              {[...new Array(4).keys()].map((key) => (
                <li key={key}>
                  <button onClick={setCartItemHandler}>Купить</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <PopularSlider />
    </section>
  )
}

export default CurrentProduct
