import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
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
})

export const cartSelector = (state) => state.cartSlice

export const { setCartItem, deleteCartItem } = cartSlice.actions

export default cartSlice.reducer
