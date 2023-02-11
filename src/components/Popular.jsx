import { useEffect, useRef, useState } from 'react'
import PopularItem from './PopularItem'
import '../styles/c_styles/popular.scss'

const Popular = () => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const resizeHandler = () => {
      console.log(sliderRef.current.clientWidth)
      setSliderWidth(sliderRef.current.clientWidth)
    }

    window.addEventListener('resize', resizeHandler)
  }, [sliderWidth])

  return (
    <section className="popular">
      <div className="popular__top">
        <h3 className="popular__top-title">Популярные товары</h3>
        <ul className="popular__top-categories">
          <li>
            <a href="$" data-nav-color="blue">
              Катера
            </a>
          </li>
          <li>
            <a href="$" data-nav-color="blue">
              Гидроциклы
            </a>
          </li>
          <li>
            <a href="$" data-nav-color="blue">
              Лодки
            </a>
          </li>
          <li>
            <a href="$" data-nav-color="red">
              Вездеходы
            </a>
          </li>
          <li>
            <a href="$" data-nav-color="red">
              Квадроциклы
            </a>
          </li>
          <li>
            <a href="$" data-nav-color="white">
              Снегоходы
            </a>
          </li>
          <li>
            <a href="$" data-nav-color="brown">
              Двигатели
            </a>
          </li>
          <li>
            <a href="$" data-nav-color="brown">
              Запчасти
            </a>
          </li>
        </ul>
      </div>
      <div className="popular__items" ref={sliderRef}>
        <div
          className="popular__items-wrapper"
          style={{ width: `calc(100% + (310px * 4))` }}
        >
          {[...new Array(8).keys()].map((key) => (
            <PopularItem key={key} />
          ))}
        </div>
      </div>
      <a className="popular__more" href="#">
        Показать еще
      </a>
    </section>
  )
}

export default Popular
