import { useState, useRef, useEffect } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import '../styles/c_styles/intro.scss'

const introSlider = [
  './images/intro-slider/intro-slider1.jpg',
  './images/intro-slider/intro-slider2.jpg',
  './images/intro-slider/intro-slider3.jpg',
  './images/intro-slider/intro-slider4.jpg',
  './images/intro-slider/intro-slider5.jpg',
]

const Intro = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    setSliderWidth(sliderRef.current.clientWidth)

    const resizeHandler = () => {
      setSliderWidth(sliderRef.current.clientWidth)
    }

    window.addEventListener('resize', resizeHandler)
    return () => removeEventListener('resize', resizeHandler)
  }, [sliderWidth])

  const prevSlideHandler = () => {
    if (activeSlideIndex === 0) {
      setActiveSlideIndex(introSlider.length - 1)
    } else {
      setActiveSlideIndex((prev) => prev - 1)
    }
  }
  const nextSlideHandler = () => {
    if (activeSlideIndex === introSlider.length - 1) {
      setActiveSlideIndex(0)
    } else {
      setActiveSlideIndex((prev) => prev + 1)
    }
  }

  return (
    <section className="intro">
      <div className="intro-slider" ref={sliderRef}>
        <div
          className="intro-slider__wrapper"
          style={{
            width: `calc(100% * ${introSlider.length})`,
            transform: `translateX(calc(-${sliderWidth}px * ${activeSlideIndex}))`,
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
                className={`${activeSlideIndex === index ? 'active' : ''}`}
                onClick={() => setActiveSlideIndex(index)}
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
      <div className="intro-stock">Stock</div>
    </section>
  )
}

export default Intro
