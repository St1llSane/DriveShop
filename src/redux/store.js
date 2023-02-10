import { configureStore } from '@reduxjs/toolkit'
import introSliderSlice from './slices/introSliderSlice'

export const store = configureStore({
  reducer: {
    introSliderSlice,
  },
})
