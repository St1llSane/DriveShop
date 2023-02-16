import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStockItem, stockSliceSelector } from '../redux/slices/stockSlice'
import '../styles/c_styles/stock.scss'

const Stock = () => {
	const dispatch = useDispatch()
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const { stockItem } = useSelector(stockSliceSelector)
  const stockTimerId = useRef(null)

	useEffect(() => {
		dispatch(fetchStockItem())
	}, [])

  const stockTimer = () => {
    const endPoint = new Date('February 20, 2023, 00:00:00').getTime()

    stockTimerId.current = setInterval(() => {
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
        return clearInterval(stockTimerId.current)
      }

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)
  }

  useEffect(() => {
    stockTimer()
    return () => {
      clearInterval(stockTimerId.current)
    }
  }, [seconds])

  return (
    <div className="stock">
      <div className="stock__top">
        <span className="stock__top_text">Акция</span>
        <div className="stock__top_price">
          <p>{stockItem.price} p</p>
          <span>98 000 p</span>
        </div>
      </div>
      <a className="stock__content" href="#">
        <img src={stockItem.img} alt="engine" />
        <h5>{stockItem.title}</h5>
        <span>посмотреть товар</span>
      </a>
      <div className="stock__bottom">
        <p>До конца акции:</p>
        <ul className="stock__bottom_timer">
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

export default Stock
