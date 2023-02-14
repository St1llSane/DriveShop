import { useRef, useEffect } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import {
  picturesSliderSelector,
  nextSlide,
  prevSlide,
  setSlide,
  setSliderWidth,
  setTotalSlides,
} from '../redux/slices/picturesSliderSlice'
import '../styles/c_styles/pictures-slider.scss'

const picturesSlider = [
  './images/intro-slider/intro-slider1.jpg',
  './images/intro-slider/intro-slider2.jpg',
  './images/intro-slider/intro-slider3.jpg',
  './images/intro-slider/intro-slider4.jpg',
  './images/intro-slider/intro-slider5.jpg',
]

const PicturesSlider = () => {
  const dispatch = useDispatch()
  const { sliderWidth, totalSlides, currentSlideIndex } =
    useSelector(picturesSliderSelector)
  const sliderRef = useRef(null)

  useEffect(() => {
    dispatch(setTotalSlides(picturesSlider.length))

    const resizeHandler = () => {
      dispatch(setSliderWidth(sliderRef.current.clientWidth))
    }

    window.addEventListener('resize', resizeHandler)
    return () => {
      removeEventListener('resize', resizeHandler)
    }
  }, [sliderWidth])

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(nextSlide())
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentSlideIndex])

  const nextSlideHandler = () => {
    dispatch(nextSlide())
  }
  const prevSlideHandler = () => {
    dispatch(prevSlide())
  }
  const setSlideHandler = (index) => {
    dispatch(setSlide(index))
  }

  return (
    <div className="pictures-slider" ref={sliderRef}>
      <div
        className="pictures-slider__wrapper"
        style={{
          width: `calc(100% * ${totalSlides})`,
          transform: `translateX(calc(-${sliderWidth}px * ${currentSlideIndex}))`,
        }}
      >
        {picturesSlider.map((slide) => (
          <div className="pictures-slider__wrapper_item" key={slide}>
            <img src={slide} alt="pictures-slider" />
          </div>
        ))}
      </div>
      <ul className="pictures-slider__pagination">
        {picturesSlider.map((slide, index) => (
          <li key={slide}>
            <button
              className={`${currentSlideIndex === index ? 'active' : ''}`}
              onClick={() => setSlideHandler(index)}
            ></button>
          </li>
        ))}
      </ul>
      <div className="pictures-slider__arrows">
        <button
          className="pictures-slider__arrows_btn pictures-slider__arrows_btn--left"
          onClick={prevSlideHandler}
        >
          <SlArrowLeft />
        </button>
        <button
          className="pictures-slider__arrows_btn pictures-slider__arrows_btn--right"
          onClick={nextSlideHandler}
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  )
}

export default PicturesSlider
