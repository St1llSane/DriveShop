import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useGetCategoriesQuery } from '../redux/api/DriveShopApi'
import '../styles/c_styles/categories.scss'

const Categories = () => {
  const { data = [] } = useGetCategoriesQuery()

  return (
    <section className="categories">
      <div className="categories__wrapper">
        {data.map((item) => (
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
