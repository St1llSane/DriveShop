import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentProduct: {},
}

export const currentProductSlice = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload
    },
    removeCurrentProduct: (state) => {
      state.currentProduct = ''
    },
  },
})

export const currentProductSelector = (state) => state.currentProductSlice

export const { setCurrentProduct, removeCurrentProduct } =
  currentProductSlice.actions

export default currentProductSlice.reducer
