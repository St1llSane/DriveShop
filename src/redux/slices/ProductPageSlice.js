import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
  'fetchProducts/ProductPageSlice',
  async () => {
    const res = await axios.get('http://localhost:3000/hydrocycles')
    return res.data
  }
)

const initialState = {
  products: [],
}

const ProductPageSlice = createSlice({
  name: 'ProductPage',
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
	}
})

export const ProductPageSliceSelector = (state) => state.ProductPageSlice

export default ProductPageSlice.reducer
