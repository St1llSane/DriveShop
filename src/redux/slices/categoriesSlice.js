import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCategories = createAsyncThunk(
  'categoriesSlice/fetchCategories',
  async () => {
    const res = await axios.get('http://localhost:3000/categories')
    return res.data
  }
)

const initialState = {
  items: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.items = []
    }),
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload
      }),
      builder.addCase(fetchCategories.rejected, (state) => {
        state.items = []
      })
  },
})

export const categoriesSliceSelector = (state) => state.categoriesSlice

export default categoriesSlice.reducer
