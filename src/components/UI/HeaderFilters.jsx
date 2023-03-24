import { SlGrid } from 'react-icons/sl'
import { ImList } from 'react-icons/im'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {
  headerFiltersSliceSelector,
  setSortIsActive,
  setActiveSort,
} from '../../redux/slices/headerFiltersSlice'
import {
  activeProductsGridSelector,
  setActiveGrid,
} from '../../redux/slices/activeProductsGridSlice'
import { useEffect, useRef } from 'react'
import '../../styles/c_styles/ui_styles/header-filters.scss'

const sortItems = [
  { id: 1, name: 'По полулярности', filter: 'sort=popularity&_order=asc' },
  { id: 2, name: 'По цене', filter: 'sort=price&_order=asc' },
  { id: 3, name: 'По рейтингу', filter: 'sort=popularity&_order=asc' },
  { id: 4, name: 'По наличию', filter: 'sort=inStock&_order=desc' },
]

const grids = [
  {
    id: 1,
    icon: <SlGrid />,
  },
  {
    id: 2,
    icon: <ImList />,
  },
]

const HeaderFilters = () => {
  const dispatch = useDispatch()
  const { sortIsActive, activeSort } = useSelector(headerFiltersSliceSelector)
  const { activeGridId } = useSelector(activeProductsGridSelector)
  const sortMenuRef = useRef(null)

  useEffect(() => {
    const outsideSortMenuClick = (e) => {
      if (!e.composedPath().includes(sortMenuRef.current)) {
        dispatch(setSortIsActive(false))
      }
    }

    if (sortIsActive) {
      window.addEventListener('click', outsideSortMenuClick)
    }
    return () => window.removeEventListener('click', outsideSortMenuClick)
  }, [sortIsActive])

  const setSortIsActiveHandler = () => {
    dispatch(setSortIsActive(!sortIsActive))
  }

  const setActiveSortHandler = (item) => {
    dispatch(setActiveSort(item))
    dispatch(setSortIsActive())
  }

  const setActiveGridHandler = (id) => {
    dispatch(setActiveGrid(id))
  }

  return (
    <div className="header-filters">
      <ul className="header-filters__labels">
        <li>Полноприводные</li>
        <li>от 5000</li>
        <li>BRP</li>
        <li>еще</li>
      </ul>
      <div className="header-filters__actions">
        <div className="header-filters__actions-sort" ref={sortMenuRef}>
          <button
            className="header-filters__actions-sort--active"
            onClick={setSortIsActiveHandler}
          >
            {sortItems[activeSort.id - 1].name}
            <IoIosArrowForward />
          </button>
          <ul className={sortIsActive ? 'active' : ''}>
            {sortItems.map((item) =>
              item.id !== activeSort.id ? (
                <li key={item.id}>
                  <button onClick={() => setActiveSortHandler(item)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </div>
        <ul className="header-filters__actions-grids">
          {grids.map((item) => (
            <li key={item.id}>
              <button
                className={item.id === activeGridId ? 'active' : ''}
                onClick={() => setActiveGridHandler(item.id)}
              >
                {item.icon}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeaderFilters
