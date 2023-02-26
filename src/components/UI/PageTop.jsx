import '../../styles/c_styles/ui_styles/page-top.scss'

const PageTop = (props) => {
  return (
    <div className="page-top">
      <h3 className="page-top__title">{props.children}</h3>
    </div>
  )
}

export default PageTop
