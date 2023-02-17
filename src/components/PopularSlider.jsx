import { useEffect, useRef } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPopularItems,
  nextSlide,
  popularSliderSelector,
  prevSlide,
  setSliderWidth,
} from '../redux/slices/popularSliderSlice'
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
  const dispatch = useDispatch()
  const { items, sliderWidth, slideIndex } = useSelector(popularSliderSelector)
  const sliderRef = useRef(null)
  const sliderWrapperRef = useRef(null)
  console.log(items)

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
        {items
          .concat(items)
          .slice(slideIndex, slideIndex + 4)
          .map((item) => (
            <PopularItem item={item} />
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
