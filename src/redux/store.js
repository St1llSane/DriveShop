import {
	configureStore,
	combineReducers,
	getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { DriveShopApi } from './api/DriveShopApi'
import picturesSliderSlice from './slices/picturesSliderSlice'
import popularSliderSlice from './slices/popularSliderSlice'
import headerFiltersSlice from './slices/headerFiltersSlice'
import filtersParametersSlice from './slices/filtersParametersSlice'
import filtersRangeSlice from './slices/filtersRangeSlice'
import activePageSlice from './slices/activePageSlice'
import favoriteItemSlice from './slices/favoriteItemSlice'
import cartSlice from './slices/cartSlice'
import currentProductSlice from './slices/currentProductSlice'
import activeProductsGridSlice from './slices/activeProductsGridSlice'
import burgerSlice from './slices/burgerSlice'
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
	[DriveShopApi.reducerPath]: DriveShopApi.reducer,
	picturesSliderSlice,
	popularSliderSlice,
	headerFiltersSlice,
	filtersParametersSlice,
	filtersRangeSlice,
	activePageSlice,
	favoriteItemSlice,
	cartSlice,
	currentProductSlice,
	activeProductsGridSlice,
	burgerSlice,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'favoriteItemSlice',
		'cartSlice',
		'currentProductSlice',
		'activeProductsGridSlice',
		'filtersParametersSlice',
		'filtersRangeSlice',
	],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(DriveShopApi.middleware),
})

export const persistor = persistStore(store)
