import { useState, useRef, useEffect } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import {
  introSliderSelector,
  nextSlide,
  prevSlide,
  setSlide,
  setTotalSlides,
} from '../redux/slices/introSliderSlice'
import IntroStock from './IntroStock'
import '../styles/c_styles/intro.scss'

const introSlider = [
  './images/intro-slider/intro-slider1.jpg',
  './images/intro-slider/intro-slider2.jpg',
  './images/intro-slider/intro-slider3.jpg',
  './images/intro-slider/intro-slider4.jpg',
  './images/intro-slider/intro-slider5.jpg',
]

const Intro = () => {
  const dispatch = useDispatch()
  const { totalSlides, currentSlideIndex } = useSelector(introSliderSelector)
  const [sliderWidth, setSliderWidth] = useState(0)
  const sliderRef = useRef(null)

  const nextSlideHandler = () => {
    dispatch(nextSlide())
  }
  const prevSlideHandler = () => {
    dispatch(prevSlide())
  }
  const setSlideHandler = (index) => {
    dispatch(setSlide(index))
  }

  useEffect(() => {
    dispatch(setTotalSlides(introSlider.length))
    setSliderWidth(sliderRef.current.clientWidth)

		const timer = setTimeout(() => {
			dispatch(nextSlide())
		}, 5000);

    const resizeHandler = () => {
      setSliderWidth(sliderRef.current.clientWidth)
    }
    window.addEventListener('resize', resizeHandler)

    return () => {
			clearTimeout(timer)
      removeEventListener('resize', resizeHandler)
    }
  }, [sliderWidth, currentSlideIndex])

  return (
    <section className="intro">
      <div className="intro-slider" ref={sliderRef}>
        <div
          className="intro-slider__wrapper"
          style={{
            width: `calc(100% * ${totalSlides})`,
            transform: `translateX(calc(-${sliderWidth}px * ${currentSlideIndex}))`,
          }}
        >
          {introSlider.map((slide) => (
            <div className="intro-slider__wrapper_item" key={slide}>
              <img src={slide} alt="intro-slider" />
            </div>
          ))}
        </div>
        <ul className="intro-slider__pagination">
          {introSlider.map((slide, index) => (
            <li key={slide}>
              <button
                className={`${currentSlideIndex === index ? 'active' : ''}`}
                onClick={() => setSlideHandler(index)}
              ></button>
            </li>
          ))}
        </ul>
        <div className="intro-slider__arrows">
          <button
            className="intro-slider__arrows_btn intro-slider__arrows_btn--left"
            onClick={prevSlideHandler}
          >
            <SlArrowLeft />
          </button>
          <button
            className="intro-slider__arrows_btn intro-slider__arrows_btn--right"
            onClick={nextSlideHandler}
          >
            <SlArrowRight />
          </button>
        </div>
      </div>
      <IntroStock />
    </section>
  )
}

export default Intro
