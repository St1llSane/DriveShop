import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchProducts,
  ProductPageSliceSelector,
} from '../redux/slices/ProductPageSlice'
import ProductItem from './ProductItem'
import '../styles/c_styles/products.scss'

const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(ProductPageSliceSelector)
  console.log(products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="products">
        {products.map((item) => (
          <ProductItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products
