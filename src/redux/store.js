import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import picturesSliderSlice from './slices/picturesSliderSlice'
import popularSliderSlice from './slices/popularSliderSlice'
import stockSlice from './slices/stockSlice'
import categoriesSlice from './slices/categoriesSlice'
import headerFiltersSlice from './slices/headerFiltersSlice'
import filtersParametersSlice from './slices/filtersParametersSlice'
import productPageSlice from './slices/productPageSlice'
import activePageSlice from './slices/activePageSlice'
import favoriteItemSlice from './slices/favoriteItemSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  picturesSliderSlice,
  popularSliderSlice,
  stockSlice,
  categoriesSlice,
  headerFiltersSlice,
  filtersParametersSlice,
  activePageSlice,
  productPageSlice,
  favoriteItemSlice,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteItemSlice'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
