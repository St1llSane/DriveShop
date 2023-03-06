import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFavItem = createAsyncThunk(
  'favoriteItem/fetchFavItem',
  async (obj) => {
    const res = await axios.post('http://localhost:3000/favorites', obj)
    console.log(res.data)
    return res.data
  }
)
export const fetchDeleteFavItem = createAsyncThunk(
  'favoriteItem/fetchDeleteFavItem',
  async (id) => {
    const res = await axios.delete(`http://localhost:3000/favorites/${id}`)
    console.log(res.data)
    return res.data
  }
)

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
