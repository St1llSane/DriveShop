import FiltersItem from './FiltersItem'
import '../../styles/c_styles/ui_styles/filters-parameters.scss'

const checkboxes = {
  availability: ['Наличие', 'В наличии', 'Под заказ'],
  filter: ['Фильтр', 'Все', 'Новинки', 'Акции'],
}

const FiltersParameters = () => {
  return (
    <form className="filters-parameters">
      <FiltersItem type="radio" engName="availability">
        {checkboxes.availability}
      </FiltersItem>
      <FiltersItem type="radio" engName="filter">
        {checkboxes.filter}
      </FiltersItem>
    </form>
  )
}

export default FiltersParameters
