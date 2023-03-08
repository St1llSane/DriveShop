import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGetCartItem = createAsyncThunk(
  'favoriteItem/fetchGetFavItem',
  async () => {
    const res = await axios.get('http://localhost:3000/cart')
    return res.data
  }
)
export const fetchPostCartItem = createAsyncThunk(
  'favoriteItem/fetchPostFavItem',
  async (obj) => {
    const res = await axios.post('http://localhost:3000/cart', obj)
    return res.data
  }
)
export const fetchDeleteCartItem = createAsyncThunk(
  'favoriteItem/fetchDeleteFavItem',
  async (id) => {
    const res = await axios.delete(`http://localhost:3000/cart/${id}`)
    console.log(res.data)
    return res.data
  }
)

const initialState = {
  cart: [],
  fetchedCart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem: (state, action) => {
      state.cart.push(action.payload)
    },
    deleteCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item !== action.payload
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetCartItem.pending, (state) => {
      state.fetchedCart = []
    }),
      builder.addCase(fetchGetCartItem.fulfilled, (state, action) => {
        state.fetchedCart = action.payload
      }),
      builder.addCase(fetchGetCartItem.rejected, (state) => {
        state.fetchedCart = []
      })
  },
})

export const cartSelector = (state) => state.cartSlice

export const { setCartItem, deleteCartItem } = cartSlice.actions

export default cartSlice.reducer
