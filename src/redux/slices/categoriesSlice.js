import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
})

export const categoriesSliceSelector = (state) => state.categoriesSlice

export default categoriesSlice.reducer
