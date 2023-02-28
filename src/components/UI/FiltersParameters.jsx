import FiltersItem from './FiltersItem'
import '../../styles/c_styles/ui_styles/filters-parameters.scss'

const filters = [
  ['Наличие', 'availability', 'radio', 'В наличии', 'Под заказ'],
  ['Фильтр', 'filter', 'radio', 'Все', 'Новинки', 'Акции'],
  ['Бренд', 'brand', 'checkbox', 'BRP', 'Spark 2', 'Spark 3 '],
  [
    'Модель',
    'model',
    'checkbox',
    'Sea-doo Spark 2',
    'SeaDoo Spark 90',
    'SeaDoo GTI 155',
    'SeaDoo GTR 230',
  ],
  ['Страны', 'countries', 'checkbox', 'Россия', 'Германия', 'Китай', 'CША'],
]

const FiltersParameters = () => {
  return (
    <form className="filters-parameters">
      {filters.map((item) => (
        <FiltersItem key={item[0]}>{item}</FiltersItem>
      ))}
    </form>
  )
}

export default FiltersParameters
