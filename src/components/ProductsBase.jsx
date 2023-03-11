import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { currentProductSelector } from '../redux/slices/currentProductSlice'
import Filters from '../components/UI/Filters'
import CurrentProduct from '../pages/CurrentProduct'
import Products from './Products'

const ProductsBase = () => {
  const location = useLocation()
  const { currentProduct } = useSelector(currentProductSelector)

  return (
    <>
      {!location.pathname.includes(currentProduct.engTitle) ? (
        <>
          <Filters />
          <Products />
        </>
      ) : (
        <CurrentProduct />
      )}
    </>
  )
}

export default ProductsBase
