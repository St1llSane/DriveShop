import PopularNav from './UI/PopularNav'
import PopularSlider from './PopularSlider'
import '../styles/c_styles/popular.scss'

const Popular = () => {
  return (
    <section className="popular">
      <div className="popular__top">
        <h3 className="popular__top-title">Популярные товары</h3>
        <PopularNav />
      </div>
      <PopularSlider />
      <a className="popular__more" href="#">
        Показать еще
      </a>
    </section>
  )
}

export default Popular
