import '../../styles/c_styles/ui_styles/popular-top.scss'

const popularNav = [
  {
    id: 1,
    name: 'Электроника',
    color: 'blue',
  },
  {
    id: 2,
    name: 'Инструменты',
    color: 'blue',
  },
  {
    id: 3,
    name: 'Аксессуары',
    color: 'red',
  },

  {
    id: 4,
    name: 'Шины',
    color: 'white',
  },
  {
    id: 5,
    name: 'Двигатели',
    color: 'brown',
  },
  {
    id: 6,
    name: 'Запчасти',
    color: 'brown',
  },
]

const PopularTop = () => {
  return (
    <div className="popular__top">
      <h3 className="popular__top-title">Популярные товары</h3>
      <ul className="popular__nav">
        {popularNav.map((item) => (
          <li key={item.id}>
            <a href="#" data-nav-color={item.color}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularTop
