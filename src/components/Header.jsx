import { MdOutlineSpeed } from 'react-icons/md'
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { cartSelector } from '../redux/slices/cartSlice'
import { favoriteItemSelector } from '../redux/slices/favoriteItemSlice'
import Nav from './UI/Nav'
import '../styles/c_styles/header.scss'

const Header = () => {
  const { favItems } = useSelector(favoriteItemSelector)
  const { cart } = useSelector(cartSelector)

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
                <span>{favItems.length}</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <AiOutlineUser />
              </a>
            </li>
            <li>
              <Link to="/cart">
                <AiOutlineShoppingCart />
                <span>{cart.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Nav />
    </header>
  )
}

export default Header
