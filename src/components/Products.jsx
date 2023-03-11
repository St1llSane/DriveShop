import { useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../redux/api/DriveShopApi'
import ProductItem from './ProductItem'
import '../styles/c_styles/products.scss'

const Products = () => {
  const location = useLocation().pathname.slice(1)
  const { data = [] } = useGetProductsQuery(location)

  return (
    <div className="products">
      {data.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products
