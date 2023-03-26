import '../../styles/c_styles/ui_styles/product-Item-skeleton.scss'

const ProductItemSkeleton = (props) => {
  return (
    <div
      className={`product-Item-skeleton ${props.popular ? props.popular : ''}`}
    >
      <div className="product-Item-skeleton__top skeleton"></div>
      <div className="product-Item-skeleton__middle">
        <div className="product-Item-skeleton__middle-img skeleton"></div>
        <div className="product-Item-skeleton__middle-text skeleton"></div>
      </div>
      <div className="product-Item-skeleton__bottom">
        <div className="product-Item-skeleton__bottom-text skeleton"></div>
        <div className="product-Item-skeleton__bottom-cart skeleton"></div>
      </div>
    </div>
  )
}

export default ProductItemSkeleton
