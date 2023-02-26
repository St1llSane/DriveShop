import { SlGrid } from 'react-icons/sl'
import { ImList } from 'react-icons/im'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {
  HeaderFiltersSliceSelector,
  setActiveSortId,
  setSortIsActive,
  setActiveGridId,
} from '../../redux/slices/HeaderFiltersSlice'
import '../../styles/c_styles/ui_styles/header-filters.scss'

const sortItems = [
  { id: 1, name: 'По полулярности' },
  { id: 2, name: 'По цене' },
  { id: 3, name: 'По рейтингу' },
  { id: 4, name: 'По наличию' },
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
  const { sortIsActive, activeSortId, activeGridId } = useSelector(
    HeaderFiltersSliceSelector
  )

  const setSortIsActiveHandler = () => {
    dispatch(setSortIsActive())
  }

  const setActiveSortHandler = (id) => {
    dispatch(setActiveSortId(id))
    dispatch(setSortIsActive())
  }

  const setActiveGridHandler = (id) => {
    dispatch(setActiveGridId(id))
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
        <div className="header-filters__actions-sort">
          <button
            className="header-filters__actions-sort--active"
            onClick={setSortIsActiveHandler}
          >
            {sortItems[activeSortId - 1].name}
            <IoIosArrowForward />
          </button>
          <ul className={sortIsActive ? 'active' : ''}>
            {sortItems.map((item) =>
              item.id !== activeSortId ? (
                <li key={item.id}>
                  <button onClick={() => setActiveSortHandler(item.id)}>
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
