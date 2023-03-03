import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
  'fetchProducts/productPageSlice',
  async (value) => {
    const res = await axios.get(`http://localhost:3000/${value}`)
    return res.data
  }
)

const initialState = {
  products: [],
}

const productPageSlice = createSlice({
  name: 'productPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = []
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
      }),
      builder.addCase(fetchProducts.rejected, (state) => {
        state.products = []
      })
  },
})

export const productPageSliceSelector = (state) => state.productPageSlice

export default productPageSlice.reducer
