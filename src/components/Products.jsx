import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProducts,
  productPageSliceSelector,
} from '../redux/slices/productPageSlice'
import { useLocation } from 'react-router-dom'
import ProductItem from './ProductItem'
import '../styles/c_styles/products.scss'

const Products = () => {
  const dispatch = useDispatch()
  const location = useLocation().pathname.slice(1)
  const { products } = useSelector(productPageSliceSelector)

  useEffect(() => {
    dispatch(fetchProducts(location))
  }, [location])

  return (
    <div className="products">
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products
