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
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const sliderRef = useRef(null)
  const introStockTimerId = useRef(null)

  const prevSlideHandler = () => {
    clearTimeout(sliderAnimationTimerId.current)
    if (activeSlideIndex === 0) {
      setActiveSlideIndex(introSlider.length - 1)
    } else {
      setActiveSlideIndex((prev) => prev - 1)
    }
  }
  const nextSlideHandler = () => {
    clearTimeout(sliderAnimationTimerId.current)
    if (activeSlideIndex === introSlider.length - 1) {
      setActiveSlideIndex(0)
    } else {
      setActiveSlideIndex((prev) => prev + 1)
    }
  }

  const introStockTimer = () => {
    const endPoint = new Date('February 20, 2023, 00:00:00').getTime()

    introStockTimerId.current = setInterval(() => {
      const now = new Date().getTime()
      const distance = endPoint - now

      const calcTime = (value) => {
        return Math.floor(value).toString().padStart(2, '0')
      }

      const days = calcTime(distance / (1000 * 60 * 60 * 24))
      const hours = calcTime(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = calcTime((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = calcTime((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        return clearInterval(introStockTimerId.current)
      }

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)
  }

  useEffect(() => {
    setSliderWidth(sliderRef.current.clientWidth)

    const resizeHandler = () => {
      setSliderWidth(sliderRef.current.clientWidth)
    }

    window.addEventListener('resize', resizeHandler)
    introStockTimer()

    return () => {
      removeEventListener('resize', resizeHandler)
      clearInterval(introStockTimerId.current)
    }
  }, [sliderWidth, seconds])

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
      <div className="intro-stock">
        <div className="intro-stock__top">
          <span className="intro-stock__top_text">Акция</span>
          <div className="intro-stock__top_price">
            <p>190 000 p</p>
            <span>225 000 p</span>
          </div>
        </div>
        <a className="intro-stock__content" href="#">
          <img src="./images/items/engine2.png" alt="engine" />
          <h5>Лодочный мотор Suzuki DF9.9BRS</h5>
        </a>
        <div className="intro-stock__bottom">
          <p>До конца акции:</p>
          <ul className="intro-stock__bottom_timer">
            <li>{days}</li>
            <li>:</li>
            <li>{hours}</li>
            <li>:</li>
            <li>{minutes}</li>
            <li>:</li>
            <li>{seconds}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Intro
