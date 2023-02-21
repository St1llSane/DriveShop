import { IoIosArrowForward } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/c_styles/ui_styles/page-history.scss'

const PageHistory = () => {
  const location = useLocation()
  const history = location.pathname.split('/').splice(1)

  return (
    <ul className="page-history">
      <li>
        <Link to="/">Главная</Link>
      </li>
      {history.map((item) => (
        <li key={item}>
          <IoIosArrowForward />
          <Link to={`/${item}`}>
            {(item === 'favorites' && 'Закладки') ||
              (item === 'product-page' && 'Страница продукта') ||
              (item === 'cart' && 'Корзина') ||
              (item === 'speedboat' && 'Катера') ||
              (item === 'hydrocycles' && 'Гидроциклы') ||
              (item === 'boats' && 'Лодки') ||
              (item === 'rovers' && 'Вездеходы') ||
              (item === 'atvs' && 'Квадроциклы') ||
              (item === 'snowmobiles' && 'Снегоходы') ||
              (item === 'engines' && 'Двигатели') ||
              (item === 'spare-parts' && 'Детали')}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PageHistory
