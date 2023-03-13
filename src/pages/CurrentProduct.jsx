import { useSelector } from 'react-redux'
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { IoStatsChartSharp } from 'react-icons/io5'
import { currentProductSelector } from '../redux/slices/currentProductSlice'
import '../styles/c_styles/p_styles/current-product.scss'

const CurrentProduct = () => {
  const { currentProduct } = useSelector(currentProductSelector)

  return (
    <section className="current-product">
      <div className="current-product__content">
        <div className="current-product__content-left">
          <span className="current-product__content_sale">Скидка</span>
          <img
            className="current-product__content_img"
            src={`.${currentProduct.img}`}
            alt={currentProduct.title}
          />
          <div className="current-product__content_price">
            <span>1 200 475 ₽</span>
            <span>1 100 475 ₽</span>
            <button>Нашли дешевле? Снизим цену!</button>
          </div>
        </div>
        <div className="current-product__content-right">
          <div className="current-product__content_header">
            <h2>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
            <span>Код товара: 366666-2 </span>
            <ul>
              <li>
                <button>
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
              <button className='active'>Характеристики</button>
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
                  <span> 2018</span>
                </li>
              </ul>
              <button>Показать еще</button>
            </div>
          </div>
          <button className="current-product__content-right_buy">купить</button>
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
            <button>Самовывоз</button>
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
          <h1>fgdsfsdfsd</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            consequatur ab in qui recusandae, beatae sapiente iure, repellat
            maxime ullam similique dignissimos nam, reprehenderit perferendis.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CurrentProduct
