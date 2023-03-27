import {
  activePageSelector,
  setActivePage,
} from '../../redux/slices/activePageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/c_styles/ui_styles/nav.scss'

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

const Nav = () => {
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
  )
}

export default Nav
