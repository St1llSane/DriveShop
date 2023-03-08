import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { currentProductSelector } from '../redux/slices/currentProductSlice'
import PageHistory from '../components/UI/PageHistory'
import CurrentProduct from './CurrentProduct'
import '../styles/c_styles/p_styles/page-base.scss'

const PageBase = (props) => {
  const location = useLocation()
  const { currentProduct } = useSelector(currentProductSelector)

  useEffect(() => {}, [location])

  return (
    <>
      <PageHistory />
      {!location.pathname.includes(currentProduct.engTitle) ? (
        <div className="page-base">
          {props.children[0]}
          <div className="page-base__wrapper">{props.children[1]}</div>
        </div>
      ) : (
        <CurrentProduct />
      )}
    </>
  )
}

export default PageBase
