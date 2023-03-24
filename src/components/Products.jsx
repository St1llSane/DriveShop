import { useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../redux/api/DriveShopApi'
import { useSelector } from 'react-redux'
import { headerFiltersSliceSelector } from '../redux/slices/headerFiltersSlice'
import { activeProductsGridSelector } from '../redux/slices/activeProductsGridSlice'
import ProductItem from './ProductItem'
import ProductItemSkeleton from './UI/ProductItemSkeleton'
import '../styles/c_styles/products.scss'

const Products = () => {
  const location = useLocation()
  const { activeSort } = useSelector(headerFiltersSliceSelector)
  const { data = [], isLoading } = useGetProductsQuery({
    location: location.pathname,
    filter: activeSort.filter,
  })
  const { activeGridId } = useSelector(activeProductsGridSelector)

  const skeleton = [...new Array(7).keys()].map((key) => (
    <ProductItemSkeleton key={key} />
  ))

  const content = data.map((item) => (
    <ProductItem
      item={item}
      activeGrid={activeGridId === 2 ? 'list' : ''}
      key={item.id}
    />
  ))

  return (
    <>
      <div className={`products ${activeGridId === 2 ? 'list' : ''}`}>
        {isLoading ? skeleton : content}
      </div>
    </>
  )
}

export default Products
