import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortIsActive: false,
  activeSort: { id: 4, name: 'По наличию', filter: 'sort=inStock&_order=desc' },
}

export const headerFiltersSlice = createSlice({
  name: 'headerFilters',
  initialState,
  reducers: {
    setSortIsActive: (state, action) => {
      state.sortIsActive = action.payload
    },
    setActiveSort: (state, action) => {
      state.activeSort = action.payload
    },
  },
})

export const headerFiltersSliceSelector = (state) => state.headerFiltersSlice

export const { setSortIsActive, setActiveSort } = headerFiltersSlice.actions

export default headerFiltersSlice.reducer
