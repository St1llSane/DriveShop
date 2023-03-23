import { useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../redux/api/DriveShopApi'
import { useSelector } from 'react-redux'
import { activeProductsGridSelector } from '../redux/slices/activeProductsGridSlice'
import ProductItem from './ProductItem'
import '../styles/c_styles/products.scss'

const Products = () => {
  const location = useLocation()
  const { data = [] } = useGetProductsQuery(location.pathname)
  const { activeGridId } = useSelector(activeProductsGridSelector)

  return (
    <>
      <div className={`products ${activeGridId === 2 ? 'list' : ''}`}>
        {data.map((item) => (
          <ProductItem item={item} activeGrid={activeGridId === 2 ? 'list' : ''} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default Products
