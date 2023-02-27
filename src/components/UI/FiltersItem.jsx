import React from 'react'
import FiltersCheckbox from './FiltersCheckbox'

const FiltersItem = (props) => {
  const { type } = props
  const name = props.children[0]
  const params = props.children.slice(1)

  return (
    <div className="filters-item">
      <button>{props.children[0]}</button>
      {React.Children.map(params, (item) => (
        <FiltersCheckbox type={type} name={name}>
          {item}
        </FiltersCheckbox>
      ))}
    </div>
  )
}

export default FiltersItem
