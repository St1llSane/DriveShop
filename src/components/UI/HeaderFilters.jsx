import { SlGrid } from 'react-icons/sl'
import { ImList } from 'react-icons/im'
import { IoIosArrowForward } from 'react-icons/io'
import '../../styles/c_styles/ui_styles/header-filters.scss'

const HeaderFilters = () => {
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
          <button className="header-filters__actions-sort--active">
            По полулярности
            <IoIosArrowForward />
          </button>
          <ul className="active">
            <li>
              <button>По цене</button>
            </li>
            <li>
              <button>По рейтингу</button>
            </li>
            <li>
              <button>По наличию</button>
            </li>
          </ul>
        </div>
        <div className="header-filters__actions-grids">
          <button>
            <SlGrid />
          </button>
          <button>
            <ImList />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderFilters
