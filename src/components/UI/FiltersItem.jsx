const FiltersItem = (props) => {
  return (
    <div className="filters-item">
      <button>{props.children[0]}</button>
      <div className="filters-item__wrapper">{props.children.slice(1)}</div>
    </div>
  )
}

export default FiltersItem
