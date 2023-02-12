import { configureStore } from '@reduxjs/toolkit'
import introSliderSlice from './slices/introSliderSlice'
import popularSliderSlice from './slices/popularSliderSlice'

export const store = configureStore({
  reducer: {
    introSliderSlice,
    popularSliderSlice,
  },
})
