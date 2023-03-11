import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { DriveShopApi } from './api/DriveShopApi'
import picturesSliderSlice from './slices/picturesSliderSlice'
import popularSliderSlice from './slices/popularSliderSlice'
import headerFiltersSlice from './slices/headerFiltersSlice'
import filtersParametersSlice from './slices/filtersParametersSlice'
import activePageSlice from './slices/activePageSlice'
import favoriteItemSlice from './slices/favoriteItemSlice'
import cartSlice from './slices/cartSlice'
import currentProductSlice from './slices/currentProductSlice'

export const store = configureStore({
  reducer: {
    [DriveShopApi.reducerPath]: DriveShopApi.reducer,
    picturesSliderSlice,
    popularSliderSlice,
    headerFiltersSlice,
    filtersParametersSlice,
    activePageSlice,
    favoriteItemSlice,
    cartSlice,
    currentProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(DriveShopApi.middleware),
})
