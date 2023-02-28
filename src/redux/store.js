import { configureStore } from '@reduxjs/toolkit'
import picturesSliderSlice from './slices/picturesSliderSlice'
import popularSliderSlice from './slices/popularSliderSlice'
import stockSlice from './slices/stockSlice'
import categoriesSlice from './slices/categoriesSlice'
import HeaderFiltersSlice from './slices/HeaderFiltersSlice'
import filtersParametersSlice from './slices/filtersParametersSlice'

export const store = configureStore({
  reducer: {
    picturesSliderSlice,
    popularSliderSlice,
    stockSlice,
    categoriesSlice,
    HeaderFiltersSlice,
    filtersParametersSlice,
  },
})
