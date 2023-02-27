import React from 'react'

const FiltersCheckbox = (props) => {
  const { name, type, children } = props

  return (
    <label className="filters-checkbox">
      {React.Children.map(children, (item) => (
        <>
          <input type={type} name={name} value={item} />
          <span>{item}</span>
        </>
      ))}
    </label>
  )
}

export default FiltersCheckbox
