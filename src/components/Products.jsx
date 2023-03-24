import { useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../redux/api/DriveShopApi'
import { useSelector } from 'react-redux'
import { headerFiltersSliceSelector } from '../redux/slices/headerFiltersSlice'
import { activeProductsGridSelector } from '../redux/slices/activeProductsGridSlice'
import ProductItem from './ProductItem'
import '../styles/c_styles/products.scss'

const Products = () => {
  const location = useLocation()
  const { activeSort } = useSelector(headerFiltersSliceSelector)
  console.log(activeSort.filter)
  const { data = [] } = useGetProductsQuery({
    location: location.pathname,
    filter: activeSort.filter,
  })
  const { activeGridId } = useSelector(activeProductsGridSelector)

  return (
    <>
      <div className={`products ${activeGridId === 2 ? 'list' : ''}`}>
        {data.map((item) => (
          <ProductItem
            item={item}
            activeGrid={activeGridId === 2 ? 'list' : ''}
            key={item.id}
          />
        ))}
      </div>
    </>
  )
}

export default Products
