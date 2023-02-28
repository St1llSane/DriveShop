import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filtersParametersSliceSelector,
  onChangeCheckbox,
} from '../../redux/slices/filtersParametersSlice'
import '../../styles/c_styles/ui_styles/filters-checkbox.scss'

const FiltersCheckbox = (props) => {
  const dispatch = useDispatch()
  const { type, engName, children } = props
  const { defValue, filters } = useSelector(filtersParametersSliceSelector)
  console.log(filters)

  const onChangeCheckboxHandler = (e) => {
    dispatch(onChangeCheckbox({ name: e.target.name, value: e.target.value }))
  }

  return (
    <label className="filters-checkbox">
      {React.Children.map(children, (item) => (
        <>
          <input
            type={type}
            name={engName}
            value={item}
            defaultChecked={children === defValue}
            onChange={onChangeCheckboxHandler}
          />
          <span>{item}</span>
        </>
      ))}
    </label>
  )
}

export default FiltersCheckbox
