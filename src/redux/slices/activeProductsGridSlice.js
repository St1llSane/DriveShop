import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeGridId: 1,
}

export const activeProductsGridSlice = createSlice({
  name: 'activeProductsGrid',
  initialState,
  reducers: {
    setActiveGrid: (state, action) => {
      state.activeGridId = action.payload
    },
  },
})

export const activeProductsGridSelector = (state) => state.activeProductsGridSlice

export const { setActiveGrid } = activeProductsGridSlice.actions

export default activeProductsGridSlice.reducer
