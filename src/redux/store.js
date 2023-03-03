import { configureStore } from '@reduxjs/toolkit'
import picturesSliderSlice from './slices/picturesSliderSlice'
import popularSliderSlice from './slices/popularSliderSlice'
import stockSlice from './slices/stockSlice'
import categoriesSlice from './slices/categoriesSlice'
import headerFiltersSlice from './slices/headerFiltersSlice'
import filtersParametersSlice from './slices/filtersParametersSlice'
import productPageSlice from './slices/productPageSlice'

export const store = configureStore({
  reducer: {
    picturesSliderSlice,
    popularSliderSlice,
    stockSlice,
    categoriesSlice,
    headerFiltersSlice,
    filtersParametersSlice,
		productPageSlice
  },
})
