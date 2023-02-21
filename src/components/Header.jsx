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
            <a href="#" data-nav-color="blue">
              Катера
            </a>
          </li>
          <li>
            <a href="#" data-nav-color="blue">
              Гидроциклы
            </a>
          </li>
          <li>
            <a href="#" data-nav-color="blue">
              Лодки
            </a>
          </li>
          <li>
            <a href="#" data-nav-color="red">
              Вездеходы
            </a>
          </li>
          <li>
            <a href="#" data-nav-color="red">
              Квадроциклы
            </a>
          </li>
          <li>
            <a href="#" data-nav-color="white">
              Снегоходы
            </a>
          </li>
          <li>
            <a href="#" data-nav-color="brown">
              Двигатели
            </a>
          </li>
          <li>
            <a href="#" data-nav-color="brown">
              Запчасти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
