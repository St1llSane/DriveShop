import FiltersItem from './FiltersItem'

const checkboxes = {
  availability: ['Наличие', 'В наличии', 'Под заказ'],
  show: ['Показать', 'Все', 'Новинки', 'Акции'],
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
