import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortIsActive: false,
  activeSortId: 1,
}

export const headerFiltersSlice = createSlice({
  name: 'headerFilters',
  initialState,
  reducers: {
    setSortIsActive: (state, action) => {
      state.sortIsActive = action.payload
    },
    setActiveSortId: (state, action) => {
      state.activeSortId = action.payload
    },
  },
})

export const headerFiltersSliceSelector = (state) => state.headerFiltersSlice

export const { setSortIsActive, setActiveSortId } =
headerFiltersSlice.actions

export default headerFiltersSlice.reducer
