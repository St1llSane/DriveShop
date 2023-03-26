import FiltersItem from './FiltersItem'
import '../../styles/c_styles/ui_styles/filters-parameters.scss'

const filters = [
  ['Наличие', 'availability', 'radio', 'Все', 'В наличии', 'Под заказ'],
  ['Фильтр', 'filter', 'radio', 'Все', 'Новинки', 'Акции'],
  ['Бренд', 'brand', 'radio', 'Все', 'BRP', 'Spark 2', 'Spark 3'],
  [
    'Модель',
    'model',
    'radio',
    'Все',
    'Sea-doo Spark 2',
    'SeaDoo Spark 90',
    'SeaDoo GTI 155',
    'SeaDoo GTR 230',
  ],
  ['Страна', 'countries', 'radio', 'Все', 'Россия', 'Германия', 'Китай', 'CША'],
]

const FiltersParameters = () => {
  return (
    <form className="filters-parameters">
      {filters.map((item) => (
        <FiltersItem filters={filters} key={item[0]}>
          {item}
        </FiltersItem>
      ))}
    </form>
  )
}

export default FiltersParameters
