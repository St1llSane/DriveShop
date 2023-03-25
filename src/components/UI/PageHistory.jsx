import { IoIosArrowForward } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { currentProductSelector } from '../../redux/slices/currentProductSlice'
import '../../styles/c_styles/ui_styles/page-history.scss'

const PageHistory = () => {
  const location = useLocation()
  const history = location.pathname.split('/').splice(1)
  const { currentProduct } = useSelector(currentProductSelector)

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
              (item === 'speedboats' && 'Катера') ||
              (item === 'hydrocycles' && 'Гидроциклы') ||
              (item === 'boats' && 'Лодки') ||
              (item === 'rovers' && 'Вездеходы') ||
              (item === 'atvs' && 'Квадроциклы') ||
              (item === 'snowmobiles' && 'Снегоходы') ||
              (item === 'engines' && 'Двигатели') ||
              (item === 'spareParts' && 'Запчасти') ||
              (item === currentProduct.engTitle && 'Страница продукта')}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PageHistory
