import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchStockItem = createAsyncThunk(
  'stockItem/fetchStockItem',
  async () => {
    const res = await axios.get('http://localhost:3000/popular?popularity=1')
    return res.data
  }
)

const initialState = {
  stockItem: {},
}

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStockItem.pending, (state) => {
      state.stockItem = {}
    }),
      builder.addCase(fetchStockItem.fulfilled, (state, action) => {
        state.stockItem = Object.assign({}, ...action.payload)
      }),
      builder.addCase(fetchStockItem.rejected, (state) => {
        state.stockItem = {}
      })
  },
})

export const stockSliceSelector = (state) => state.stockSlice

export default stockSlice.reducer
