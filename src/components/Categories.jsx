import { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  categoriesSliceSelector,
  fetchCategories,
} from '../redux/slices/categoriesSlice'
import '../styles/c_styles/categories.scss'

const Categories = () => {
  const dispatch = useDispatch()
  const { items } = useSelector(categoriesSliceSelector)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <section className="categories">
      <div className="categories__wrapper">
        {items.map((item) => (
          <Link
            className="categories__wrapper-item"
            to={item.location}
            key={item.id}
          >
            <div className="categories__wrapper-item_info">
              <h5>{item.name}</h5>
              <span>
                Подробее
                <IoIosArrowForward />
              </span>
            </div>
            <img src={item.img} alt={item.name} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
