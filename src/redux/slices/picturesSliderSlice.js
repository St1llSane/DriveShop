import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPictures = createAsyncThunk(
  'picturesSlider/fetchPictures',
  async () => {
    const res = await axios.get('http://localhost:3000/picturesSlider')
    return res.data
  }
)

const initialState = {
  pictures: [],
  sliderWidth: 870,
  totalSlides: 0,
  startSlideIndex: 0,
  currentSlideIndex: 0,
}

export const picturesSliderSlice = createSlice({
  name: 'picturesSlider',
  initialState,
  reducers: {
    setSliderWidth: (state, action) => {
      state.sliderWidth = action.payload
    },
    setTotalSlides: (state, action) => {
      state.totalSlides = action.payload
    },
    nextSlide: (state) => {
      state.currentSlideIndex === state.totalSlides - 1
        ? (state.currentSlideIndex = 0)
        : (state.currentSlideIndex += 1)
    },
    prevSlide: (state) => {
      state.currentSlideIndex === 0
        ? (state.currentSlideIndex = state.totalSlides - 1)
        : (state.currentSlideIndex -= 1)
    },
    setSlide: (state, action) => {
      state.currentSlideIndex = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPictures.pending, (state) => {
      state.pictures = []
    }),
      builder.addCase(fetchPictures.fulfilled, (state, action) => {
        state.pictures = action.payload
				state.totalSlides = action.payload.length
      }),
      builder.addCase(fetchPictures.rejected, (state) => {
        state.pictures = []
      })
  },
})

export const picturesSliderSelector = (state) => state.picturesSliderSlice

export const {
  setSliderWidth,
  setTotalSlides,
  nextSlide,
  prevSlide,
  setSlide,
} = picturesSliderSlice.actions

export default picturesSliderSlice.reducer
