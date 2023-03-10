import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsCount: '',
  sliderWidth: 1200,
  currentSlideIndex: 0,
}

const popularSliderSlice = createSlice({
  name: 'popularSlider',
  initialState,
  reducers: {
    setItemsCount: (state, action) => {
      state.itemsCount = action.payload
    },
    setSliderWidth: (state, action) => {
      state.sliderWidth = action.payload
    },
    nextSlide: (state) => {
      state.currentSlideIndex === state.itemsCount - 4
        ? (state.currentSlideIndex = state.currentSlideIndex)
        : (state.currentSlideIndex = state.currentSlideIndex + 1)
    },
    prevSlide: (state) => {
      state.currentSlideIndex === 0
        ? (state.currentSlideIndex = state.currentSlideIndex)
        : (state.currentSlideIndex = state.currentSlideIndex - 1)
    },
  },
})

export const popularSliderSelector = (state) => state.popularSliderSlice

export const { setItemsCount, setSliderWidth, nextSlide, prevSlide } =
  popularSliderSlice.actions

export default popularSliderSlice.reducer
