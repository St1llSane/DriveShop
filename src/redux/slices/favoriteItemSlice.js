import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFavItem = createAsyncThunk(
  'favoriteItem/fetchFavItem',
  async (obj) => {
    const res = await axios.post('http://localhost:3000/favorites', obj)
    return res.data
  }
)

const initialState = {
  favItem: {},
}

export const favoriteItemSlice = createSlice({
  name: 'favoriteItem',
  initialState,
  reducers: {
    setFavItem: (state, action) => {
      state.favItem = action.payload
    },
  },
})

export const { setFavItem } = favoriteItemSlice.actions

export default favoriteItemSlice.reducer
