import { configureStore } from '@reduxjs/toolkit'
import picturesSliderSlice from './slices/picturesSliderSlice'
import popularSliderSlice from './slices/popularSliderSlice'
import stockSlice from './slices/stockSlice'

export const store = configureStore({
  reducer: {
    picturesSliderSlice,
    popularSliderSlice,
		stockSlice
  },
})
