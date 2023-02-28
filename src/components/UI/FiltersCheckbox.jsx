import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filtersParametersSliceSelector,
  onChangeCheckbox,
  onChangeCheckboxRadio,
} from '../../redux/slices/filtersParametersSlice'
import '../../styles/c_styles/ui_styles/filters-checkbox.scss'

const FiltersCheckbox = (props) => {
  const dispatch = useDispatch()
  const { type, engName, children } = props
  const { defValue, filters } = useSelector(filtersParametersSliceSelector)

  const onChangeCheckboxRadioHandler = (e) => {
		const target = e.target
		
    if (target.type === 'checkbox') {
      dispatch(onChangeCheckbox({ name: target.name, value: target.value }))
    } else {
      dispatch(
        onChangeCheckboxRadio({ name: target.name, value: target.value })
      )
    }
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
            onChange={onChangeCheckboxRadioHandler}
          />
          <span>{item}</span>
        </>
      ))}
    </label>
  )
}

export default FiltersCheckbox
