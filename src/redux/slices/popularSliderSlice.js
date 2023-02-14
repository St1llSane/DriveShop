import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPopularItems = createAsyncThunk(
  'items/fetchPopularItems',
  async () => {
    const res = await axios.get('http://localhost:3000/popular')
    return res.data
  }
)

const initialState = {
  items: [],
  sliderWidth: 1200,
  totalSlides: 8,
  slideIndex: 0,
}

const popularSliderSlice = createSlice({
  name: 'popularSlider',
  initialState,
  reducers: {
    setSliderWidth: (state, action) => {
      state.sliderWidth = action.payload
    },
    nextSlide: (state) => {
      state.slideIndex = (state.slideIndex + 1) % state.totalSlides
    },
    prevSlide: (state) => {
      state.slideIndex =
        (state.slideIndex + state.totalSlides - 1) % state.totalSlides
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopularItems.pending, (state) => {
      state.items = []
    }),
      builder.addCase(fetchPopularItems.fulfilled, (state, action) => {
        state.items = action.payload
      }),
      builder.addCase(fetchPopularItems.rejected, (state) => {
        state.items = []
      })
  },
})

export const popularSliderSelector = (state) => state.popularSliderSlice

export const { setSliderWidth, nextSlide, prevSlide } =
  popularSliderSlice.actions

export default popularSliderSlice.reducer
