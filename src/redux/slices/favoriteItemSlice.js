import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favItems: [],
}

export const favoriteItemSlice = createSlice({
  name: 'favoriteItem',
  initialState,
  reducers: {
    setFavItems: (state, action) => {
      state.favItems.push(action.payload)
    },
    deleteFavItem: (state, action) => {
      state.favItems = state.favItems.filter((item) => {
        return item !== action.payload
      })
    },
  },
})

export const favoriteItemSelector = (state) => state.favoriteItemSlice

export const { setFavItems, deleteFavItem } = favoriteItemSlice.actions

export default favoriteItemSlice.reducer
