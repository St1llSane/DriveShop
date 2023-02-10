import { useEffect, useRef, useState } from 'react'
import '../styles/c_styles/intro-stock.scss'

const IntroStock = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const introStockTimerId = useRef(null)

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
    introStockTimer()
    return () => {
      clearInterval(introStockTimerId.current)
    }
  }, [seconds])

  return (
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
				<span>посмотреть товар</span>
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
  )
}

export default IntroStock
