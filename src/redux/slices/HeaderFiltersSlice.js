import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortIsActive: false,
  activeSortId: 1,
  activeGridId: 1,
}

export const HeaderFiltersSlice = createSlice({
  name: 'HeaderFilters',
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

export const HeaderFiltersSliceSelector = (state) => state.HeaderFiltersSlice

export const { setSortIsActive, setActiveSortId, setActiveGridId } =
  HeaderFiltersSlice.actions

export default HeaderFiltersSlice.reducer
