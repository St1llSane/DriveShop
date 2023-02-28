import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  defValue: 'Все',
  filters: {
    availability: '',
    filter: '',
    brand: '',
    model: '',
    countries: '',
  },
}

export const filtersParametersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    onChangeCheckbox: (state, action) => {
      state.filters = action.payload
    },
    onChangeCheckboxRadio: (state, action) => {
      state.filters = {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      }
    },
  },
})

export const filtersParametersSliceSelector = (state) =>
  state.filtersParametersSlice

export const { onChangeCheckbox, onChangeCheckboxRadio } =
  filtersParametersSlice.actions

export default filtersParametersSlice.reducer
