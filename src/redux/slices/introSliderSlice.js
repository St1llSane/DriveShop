import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalSlides: 5,
  startSlideIndex: 0,
  currentSlideIndex: 0,
}

export const introSliderSlice = createSlice({
  name: 'introSlider',
  initialState,
  reducers: {
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
})

export const introSliderSelector = (state) => state.introSliderSlice

export const { setTotalSlides, nextSlide, prevSlide, setSlide } =
  introSliderSlice.actions

export default introSliderSlice.reducer
