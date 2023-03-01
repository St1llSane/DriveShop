import { useEffect, useRef } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPopularItems,
  nextSlide,
  popularSliderSelector,
  prevSlide,
  setSliderWidth,
} from '../redux/slices/popularSliderSlice'
import ProductItem from './ProductItem'
import '../styles/c_styles/popular-slider.scss'

const PopularSlider = () => {
  const dispatch = useDispatch()
  const { items, sliderWidth, currentSlideIndex } = useSelector(
    popularSliderSelector
  )
  const sliderRef = useRef(null)
  const sliderWrapperRef = useRef(null)

  useEffect(() => {
    dispatch(fetchPopularItems())

    const resizeHandler = () => {
      console.log(sliderRef.current.clientWidth)
      dispatch(setSliderWidth(sliderRef.current.clientWidth))
    }

    window.addEventListener('resize', resizeHandler)
    return () => removeEventListener('resize', resizeHandler)
  }, [sliderWidth])

  const nextSlideHandler = () => {
    dispatch(nextSlide())
  }
  const prevSlideHandler = () => {
    dispatch(prevSlide())
  }

  return (
    <div className="popular-slider" ref={sliderRef}>
      <button
        className={`popular-slider__arrow popular-slider__arrow--left ${
          currentSlideIndex === 0 && 'inactive'
        }`}
        onClick={prevSlideHandler}
      >
        <SlArrowLeft />
      </button>
      <div className="popular-slider__wrapper" ref={sliderWrapperRef}>
        <div
          className="popular-slider__inner"
          style={{
            width: `calc((270px * ${items.length}) + (30px * (${items.length} - 1)) + 30px)`,
            transform: `translateX(calc((-300px) * ${currentSlideIndex}))`,
          }}
        >
          {items.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
      <button
        className={`popular-slider__arrow popular-slider__arrow--right ${
          currentSlideIndex === items.length - 4 && 'inactive'
        }`}
        onClick={nextSlideHandler}
      >
        <SlArrowRight />
      </button>
    </div>
  )
}

export default PopularSlider
