import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/c_styles/sale-banner.scss'

const SaleBanner = () => {
  const [hover, setHover] = useState(false)

  const mouseEnterHandler = () => {
    setHover(true)
  }

  const mouseLeaveHandler = () => {
    setHover(false)
  }

  return (
    <div className="sale-banner">
      <div className="sale-banner__images">
        <img
          className={`sale-banner__images_img ${hover ? 'active' : ''}`}
          src="./images/categories/atv.png"
          alt="atv"
        />
        <img
          className={`sale-banner__images_img ${hover ? 'active' : ''}`}
          src="./images/categories/rover.png"
          alt="rover"
        />
      </div>
      <div className="sale-banner__content">
        <p>
          <span>Скидки</span> на все запчасти до 70%
        </p>
        <Link
          to={'spareParts'}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          Посмотреть все
        </Link>
      </div>
    </div>
  )
}

export default SaleBanner
