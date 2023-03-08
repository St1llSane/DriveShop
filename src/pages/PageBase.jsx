import { useLocation } from 'react-router-dom'
import PageHistory from '../components/UI/PageHistory'
import '../styles/c_styles/p_styles/page-base.scss'

const PageBase = (props) => {
  const location = useLocation()

  return (
    <>
      <PageHistory />
      {!location.pathname.includes('product-page') ? (
        <div className="page-base">
          {props.children[0]}
          <div className="page-base__wrapper">{props.children[1]}</div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default PageBase
