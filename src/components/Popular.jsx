import PopularItem from "./PopularItem"
import '../styles/c_styles/popular.scss'

const Popular = () => {
  return (
    <section className="popular">
      <div className="popular__top">
        <h3 className="popular__top-title">Популярные товары</h3>
        <ul className="popular__top-categories">
          <li>
            <a href="$" data-nav-color="blue">Катера</a>
          </li>
          <li>
            <a href="$" data-nav-color="blue">Гидроциклы</a>
          </li>
          <li>
            <a href="$" data-nav-color="blue">Лодки</a>
          </li>
          <li>
            <a href="$" data-nav-color="red">Вездеходы</a>
          </li>
          <li>
            <a href="$" data-nav-color="red">Квадроциклы</a>
          </li>
          <li>
            <a href="$" data-nav-color="white">Снегоходы</a>
          </li>
          <li>
            <a href="$" data-nav-color="brown">Двигатели</a>
          </li>
          <li>
            <a href="$" data-nav-color="brown">Запчасти</a>
          </li>
        </ul>
      </div>
			<div className="popular__items">
				<div className="popular__items-wrapper">
					<PopularItem />
					<PopularItem />
					<PopularItem />
					<PopularItem />
				</div>
			</div>
    </section>
  )
}

export default Popular