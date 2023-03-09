import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import picturesSliderSlice from './slices/picturesSliderSlice'
import { picturesSliderApi } from './apis/picturesSliderApi'
import popularSliderSlice from './slices/popularSliderSlice'
import stockSlice from './slices/stockSlice'
import categoriesSlice from './slices/categoriesSlice'
import headerFiltersSlice from './slices/headerFiltersSlice'
import filtersParametersSlice from './slices/filtersParametersSlice'
import productPageSlice from './slices/productPageSlice'
import activePageSlice from './slices/activePageSlice'
import favoriteItemSlice from './slices/favoriteItemSlice'
import cartSlice from './slices/cartSlice'
import currentProductSlice from './slices/currentProductSlice'

export const store = configureStore({
  reducer: {
    picturesSliderSlice,
    [picturesSliderApi.reducerPath]: picturesSliderApi.reducer,
    popularSliderSlice,
    stockSlice,
    categoriesSlice,
    headerFiltersSlice,
    filtersParametersSlice,
    activePageSlice,
    productPageSlice,
    favoriteItemSlice,
    cartSlice,
    currentProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(picturesSliderApi.middleware),
})
