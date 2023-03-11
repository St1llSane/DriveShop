import { useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../redux/api/DriveShopApi'
import ProductItem from './ProductItem'
import '../styles/c_styles/products.scss'

const Products = () => {
  const location = useLocation()
  const { data = [] } = useGetProductsQuery(location.pathname)

  return (
    <>
      <div className="products">
        {data.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default Products
