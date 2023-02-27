import FiltersParameters from './FiltersParameters'
import '../../styles/c_styles/ui_styles/filters.scss'

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters__wrapper">
        <div className="filters__top">
          <button>Параметры</button>
          <button>По марке</button>
        </div>
        <FiltersParameters />
      </div>
    </div>
  )
}

export default Filters
