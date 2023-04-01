import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {
    availability: 'Все',
    filter: 'Все',
    brand: 'Все',
    model: 'Все',
    countries: 'Все',
  },
}

export const filtersParametersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
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

export const { onChangeCheckboxRadio } = filtersParametersSlice.actions

export default filtersParametersSlice.reducer
