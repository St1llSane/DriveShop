import FiltersItem from './FiltersItem'
import '../../styles/c_styles/ui_styles/filters-parameters.scss'

const checkboxes = {
  availability: ['Наличие', 'В наличии', 'Под заказ'],
  show: ['Фильтр', 'Все', 'Новинки', 'Акции'],
}

const FiltersParameters = () => {
  return (
    <form className="filters-parameters">
      <FiltersItem type="radio">
        {checkboxes.availability}
      </FiltersItem>
      <FiltersItem type="radio">
        {checkboxes.show}
      </FiltersItem>
    </form>
  )
}

export default FiltersParameters
