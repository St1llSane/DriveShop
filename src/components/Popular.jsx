import PopularTop from './UI/PopularTop'
import PopularSlider from './PopularSlider'
import '../styles/c_styles/popular.scss'

const Popular = () => {
  return (
    <section className="popular">
      <PopularTop>Популярные товары</PopularTop>
      <PopularSlider />
      <a className="popular__more" href="#">
        Показать еще
      </a>
    </section>
  )
}

export default Popular
