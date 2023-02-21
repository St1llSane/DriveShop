import { MdOutlineSpeed } from 'react-icons/md'
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import '../styles/c_styles/header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <ul className="menu">
          <li>
            <a href="#">Магазины</a>
          </li>
          <li>
            <a href="#">Акции</a>
          </li>
          <li>
            <a href="#">Доставка и оплата</a>
          </li>
        </ul>
        <div className="logo">
          <Link to="/">
            <MdOutlineSpeed />
            <h2>Drive Shop</h2>
          </Link>
        </div>
        <div className="header-top__right">
          <div className="header-top__right_address">
            <IoLocationOutline />
            <address>Калининград, ул. Пушкина 28</address>
          </div>
          <ul className="header-top__right_list">
            <li>
              <Link to="/favorites">
                <AiOutlineHeart />
              </Link>
            </li>
            <li>
              <a href="#">
                <AiOutlineUser />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineShoppingCart />
                <span>0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="speedboat" data-nav-color="blue">
              Катера
            </Link>
          </li>
          <li>
            <Link to="hydrocycles" data-nav-color="blue">
              Гидроциклы
            </Link>
          </li>
          <li>
            <Link to="boats" data-nav-color="blue">
              Лодки
            </Link>
          </li>
          <li>
            <Link to="rovers" data-nav-color="red">
              Вездеходы
            </Link>
          </li>
          <li>
            <Link to="atvs" data-nav-color="red">
              Квадроциклы
            </Link>
          </li>
          <li>
            <Link to="snowmobiles" data-nav-color="white">
              Снегоходы
            </Link>
          </li>
          <li>
            <Link to="engines" data-nav-color="brown">
              Двигатели
            </Link>
          </li>
          <li>
            <Link to="spare-parts" data-nav-color="brown">
              Запчасти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
