import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeGridIndex: 'grid',
}

export const activeProductsGridSlice = createSlice({
  name: 'activeProductsGrid',
  initialState,
  reducers: {
    setActiveGrid: (state, action) => {
      state.activeGridIndex = action.payload
    },
  },
})

export const activeProductsGridSelector = (state) => state.activeProductsGridSlice

export const { setActiveGrid } = activeProductsGridSlice.actions

export default activeProductsGridSlice.reducer
