import React, { useState } from 'react'
import '../../styles/c_styles/ui_styles/filters-checkbox.scss'

const FiltersCheckbox = (props) => {
  const { type, name, children } = props

  return (
    <label className="filters-checkbox">
      {React.Children.map(children, (item) => (
        <>
          <input
            type={type}
            name={name}
            value={item}
            // checked={item === 'Все' ? true : false}
          />
          <span>{item}</span>
        </>
      ))}
    </label>
  )
}

export default FiltersCheckbox
