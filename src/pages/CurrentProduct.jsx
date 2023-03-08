import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeCurrentProduct } from '../redux/slices/currentProductSlice'

const CurrentProduct = () => {
  const dispatch = useDispatch()

  // useEffect(() => {

  // })

  return (
    <section className="current-product">
      <h3>current-product</h3>
    </section>
  )
}

export default CurrentProduct
