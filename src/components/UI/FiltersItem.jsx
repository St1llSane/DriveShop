import React from 'react'
import FiltersCheckbox from './FiltersCheckbox'
import '../../styles/c_styles/ui_styles/filters-item.scss'

const FiltersItem = (props) => {
  const { type } = props
  const name = props.children[0]
  const params = props.children.slice(1)

  return (
    <div className="filters-item">
      <div className="filters-item__top">
        <button>{`${props.children[0]}:`}</button>
      </div>
      <div className="filters-item__checkboxes">
        {React.Children.map(params, (item) => (
          <FiltersCheckbox type={type} name={name}>
            {item}
          </FiltersCheckbox>
        ))}
      </div>
    </div>
  )
}

export default FiltersItem
