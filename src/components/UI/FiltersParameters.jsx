import FiltersCheckbox from './FiltersCheckbox'
import FiltersItem from './FiltersItem'

const checkboxes = {
  availability: {
    title: 'Наличие',
    params: ['В наличии', 'Под заказ'],
  },
  show: {
    title: 'Показать',
    params: ['Все', 'Новинки', 'Акции'],
  },
}

const FiltersParameters = () => {
  return (
    <form className="filters-parameters">
      <FiltersItem>
        {checkboxes.availability.title}
        {checkboxes.availability.params.map((item) => (
          <FiltersCheckbox
            name={checkboxes.availability.title}
            type='radio'
            key={item}
          >
            {item}
          </FiltersCheckbox>
        ))}
      </FiltersItem>
    </form>
  )
}

export default FiltersParameters
