import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { removeCurrentProduct } from '../redux/slices/currentProductSlice'
import PageHistory from '../components/UI/PageHistory'

const CurrentProduct = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  // useEffect(() => {

  // })

  return (
    <>
      {!location.pathname.includes('favorites') &&
        (!location.pathname.includes('cart') && <PageHistory />)}
      <section className="current-product">
        <h3>current-product</h3>
      </section>
    </>
  )
}

export default CurrentProduct
