import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortIsActive: false,
  activeSortId: 1,
  activeGridId: 1,
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
    setActiveGridId: (state, action) => {
      state.activeGridId = action.payload
    },
  },
})

export const headerFiltersSliceSelector = (state) => state.headerFiltersSlice

export const { setSortIsActive, setActiveSortId, setActiveGridId } =
headerFiltersSlice.actions

export default headerFiltersSlice.reducer
