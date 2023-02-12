import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
})

export const popularSliderSelector = (state) => state.popularSliderSlice

export const { setSliderWidth, nextSlide, prevSlide } =
  popularSliderSlice.actions

export default popularSliderSlice.reducer
