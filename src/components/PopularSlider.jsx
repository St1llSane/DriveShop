import { useEffect, useRef } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import {
  nextSlide,
  popularSliderSelector,
  prevSlide,
  setItemsCount,
  setSliderWidth,
} from '../redux/slices/popularSliderSlice'
import ProductItem from './ProductItem'
import { useGetPopularSliderQuery } from '../redux/api/DriveShopApi'
import '../styles/c_styles/popular-slider.scss'
import ProductItemSkeleton from './UI/ProductItemSkeleton'

const PopularSlider = () => {
  const dispatch = useDispatch()
  const { data = [], isLoading } = useGetPopularSliderQuery()
  const { itemsCount, sliderWidth, currentSlideIndex } = useSelector(
    popularSliderSelector
  )
  const sliderRef = useRef(null)
  const sliderWrapperRef = useRef(null)

  useEffect(() => {
    dispatch(setItemsCount(data.length))

    const resizeHandler = () => {
      dispatch(setSliderWidth(sliderRef.current.clientWidth))
    }

    window.addEventListener('resize', resizeHandler)
    return () => removeEventListener('resize', resizeHandler)
  }, [data, sliderWidth])

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
            width: `calc((270px * ${itemsCount}) + (30px * (${itemsCount} - 1)) + 30px)`,
            transform: `translateX(calc((-300px) * ${currentSlideIndex}))`,
          }}
        >
          {data.map((item) => (
            isLoading ? (
              <ProductItemSkeleton popular={'popular-item'} key={item.id} />
            ) : (
              <ProductItem item={item} popular={'popular'} key={item.id} />
            )
						// <ProductItem item={item} popular={'popular'} key={item.id} />
            // <ProductItemSkeleton popular={'popular-item'} key={item.id} />
          ))}
        </div>
      </div>
      <button
        className={`popular-slider__arrow popular-slider__arrow--right ${
          currentSlideIndex === itemsCount - 4 && 'inactive'
        }`}
        onClick={nextSlideHandler}
      >
        <SlArrowRight />
      </button>
    </div>
  )
}

export default PopularSlider
