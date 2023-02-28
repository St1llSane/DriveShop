import React from 'react'
import FiltersCheckbox from './FiltersCheckbox'
import '../../styles/c_styles/ui_styles/filters-item.scss'

const FiltersItem = (props) => {
  const name = props.children[0]
  const engName = props.children[1]
  const type = props.children[2]
  const params = props.children.slice(3)

  return (
    <div className="filters-item">
      <div className="filters-item__top">
        <span>{`${name}:`}</span>
      </div>
      <div className="filters-item__checkboxes">
        {React.Children.map(params, (item) => (
          <FiltersCheckbox type={type} engName={engName}>
            {item}
          </FiltersCheckbox>
        ))}
      </div>
    </div>
  )
}

export default FiltersItem
