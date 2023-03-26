import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filtersParametersSliceSelector,
  onChangeCheckboxRadio,
} from '../../redux/slices/filtersParametersSlice'
import '../../styles/c_styles/ui_styles/filters-checkbox.scss'

const FiltersCheckbox = (props) => {
  const dispatch = useDispatch()
  const { type, engName, children } = props
  const { defValue } = useSelector(filtersParametersSliceSelector)

  const onChangeCheckboxRadioHandler = (e) => {
    const target = e.target
    dispatch(onChangeCheckboxRadio({ name: target.name, value: target.value }))
  }

  return (
    <label className="filters-checkbox">
      {React.Children.map(children, (child) => (
        <>
          <input
            type={type}
            name={engName}
            value={child}
            defaultChecked={child === defValue}
            onChange={onChangeCheckboxRadioHandler}
          />
          <span>{child}</span>
        </>
      ))}
    </label>
  )
}

export default FiltersCheckbox
