import { MdOutlineSpeed } from 'react-icons/md'
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
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
          <a href="#">
            <MdOutlineSpeed />
            <h2>Drive Shop</h2>
          </a>
        </div>
        <div className="header-top__right">
          <address>Калининград, ул. Пушкина 28</address>
          <ul>
            <li>
              <a href="#">
                <AiOutlineHeart />
              </a>
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
            <a href="#" data-nav-color='blue'>Катера</a>
          </li>
          <li>
            <a href="#" data-nav-color='blue'>Гидроциклы</a>
          </li>
          <li>
            <a href="#" data-nav-color='blue'>Лодки</a>
          </li>
          <li>
            <a href="#" data-nav-color='red'>Вездеходы</a>
          </li>
          <li>
            <a href="#" data-nav-color='red'>Квадроциклы</a>
          </li>
          <li>
            <a href="#" data-nav-color='white'>Снегоходы</a>
          </li>
          <li>
            <a href="#" data-nav-color='brown'>Двигатели</a>
          </li>
          <li>
            <a href="#" data-nav-color='brown'>Запчасти</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
