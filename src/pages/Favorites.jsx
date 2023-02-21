import { IoIosArrowForward } from 'react-icons/io'
import '../styles/c_styles/p_styles/favorites.scss'
import useLocationPathname from '../hooks/useLocationPathname'

const Favorites = () => {
  return (
    <section className="favorites">
      <div className="favorites__wrapper">
        <div className="favorites__wrapper-history">
          <a href="#">Главная</a>
          <IoIosArrowForward />
          <a href="#">{useLocationPathname()}</a>
        </div>
        <div className="favorites__wrapper-top">
          <h3>Закладки</h3>
        </div>
        <div className="favorites__wrapper-content"></div>
      </div>
    </section>
  )
}

export default Favorites
