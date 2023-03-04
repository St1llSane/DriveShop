import { MdOutlineSpeed } from 'react-icons/md'
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../styles/c_styles/header.scss'
import {
  activePageSelector,
  setActivePage,
} from '../redux/slices/activePageSlice'
import { useDispatch, useSelector } from 'react-redux'

const nav = [
  {
    id: 1,
    name: 'Катера',
    location: 'speedboats',
    color: 'blue',
  },
  {
    id: 2,
    name: 'Гидроциклы',
    location: 'hydrocycles',
    color: 'blue',
  },
  {
    id: 3,
    name: 'Лодки',
    location: 'boats',
    color: 'blue',
  },
  {
    id: 4,
    name: 'Вездеходы',
    location: 'rovers',
    color: 'red',
  },
  {
    id: 5,
    name: 'Квадроциклы',
    location: 'atvs',
    color: 'red',
  },
  {
    id: 6,
    name: 'Снегоходы',
    location: 'snowmobiles',
    color: 'white',
  },
  {
    id: 7,
    name: 'Двигатели',
    location: 'engines',
    color: 'brown',
  },
  {
    id: 8,
    name: 'Запчасти',
    location: 'spareParts',
    color: 'brown',
  },
]

const Header = () => {
  const dispatch = useDispatch()
  const location = useLocation().pathname.slice(1)
  const { activePage } = useSelector(activePageSelector)

  useEffect(() => {
    dispatch(setActivePage(location))
  }, [location])

  const setActiveNavHandler = () => {
    dispatch(setActivePage(location))
  }

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
          {nav.map((item) => (
            <li key={item.id}>
              <Link
                className={item.location === activePage ? 'active' : ''}
                to={item.location}
                data-nav-color={item.color}
                onClick={() => setActiveNavHandler}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
