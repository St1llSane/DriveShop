import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  defValue: 'Все',
  filters: {
    availability: '',
    filter: 'Все',
  },
}

export const filtersParametersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    onChangeCheckbox: (state, action) => {
      state.filters = {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      }
    },
  },
})

export const filtersParametersSliceSelector = (state) =>
  state.filtersParametersSlice

export const { onChangeCheckbox } = filtersParametersSlice.actions

export default filtersParametersSlice.reducer
