import { useEffect, useRef, useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import PopularItem from './PopularItem'
import '../styles/c_styles/popular-slider.scss'

const slider = [
  'Водонепроницаемый рюкзак111',
  'Водонепроницаемый рюкзак222',
  'Водонепроницаемый рюкзак333',
  'Водонепроницаемый рюкзак444',
  'Водонепроницаемый рюкзак555',
  'Водонепроницаемый рюкзак666',
  'Водонепроницаемый рюкзак777',
  'Водонепроницаемый рюкзак888',
]

const PopularSlider = () => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [slideIndex, setSlideIndex] = useState(0)
  const sliderRef = useRef(null)
  const sliderWrapperRef = useRef(null)

  useEffect(() => {
    const resizeHandler = () => {
      console.log(sliderRef.current.clientWidth)
      setSliderWidth(sliderRef.current.clientWidth)
    }

    window.addEventListener('resize', resizeHandler)
  }, [sliderWidth])

  const nextSlideHandler = () => {
    setSlideIndex((slideIndex) => (slideIndex + 1) % slider.length)
  }
  const prevSlideHandler = () => {
    setSlideIndex(
      (slideIndex) => (slideIndex + slider.length - 1) % slider.length
    )
  }

  // useEffect(() => {
  //   sliderWrapperRef.current.scrollTo({
  //     left: sliderWrapperRef.current.offsetWidth,
  //     behavior: 'smooth',
  //   })
  // }, [slideIndex])

  return (
    <div className="popular-slider" ref={sliderRef}>
      <button
        className="popular-slider__arrow popular-slider__arrow--left"
        onClick={prevSlideHandler}
      >
        <SlArrowLeft />
      </button>
      <div
        className="popular-slider__wrapper"
        // style={{ width: `calc(100% + 310px * 2)` }}
        ref={sliderWrapperRef}
      >
        {slider
          .concat(slider)
          .slice(slideIndex, slideIndex + 4)
          .map((slide) => (
            <div className="popular-item" key={slide}>
              <div className="popular-item__top">
                <span>Скидка</span>
                <a className="popular-item__top-fav" href="#">
                  <AiOutlineHeart />
                </a>
              </div>
              <a className="popular-item__content" href="#">
                <img src="./images/items/backpack.png" alt="backpack" />
                <h5>{slide}</h5>
                <span>посмотреть товар</span>
              </a>
              <div className="popular-item__bottom">
                <span className="popular-item__bottom-cost">9 800 ₽</span>
                <a className="popular-item__bottom-incart" href="#">
                  <AiOutlineShoppingCart />
                </a>
              </div>
            </div>
          ))}
      </div>
      <button
        className="popular-slider__arrow popular-slider__arrow--right"
        onClick={nextSlideHandler}
      >
        <SlArrowRight />
      </button>
    </div>
  )
}

export default PopularSlider
