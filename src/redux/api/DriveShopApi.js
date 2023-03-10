import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const DriveShopApi = createApi({
  reducerPath: 'DriveShopApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  endpoints: (build) => ({
    getPicturesSlider: build.query({
      query: () => `picturesSlider`,
    }),
    getStockItem: build.query({
      query: () => `popular?popularity=1`,
      transformResponse: (res) => {
        return res[0]
      },
    }),
    getCategories: build.query({
      query: () => `categories`,
    }),
    getPopularSlider: build.query({
      query: () => `popular`,
    }),
  }),
})

export const {
  useGetPicturesSliderQuery,
  useGetStockItemQuery,
  useGetCategoriesQuery,
  useGetPopularSliderQuery,
} = DriveShopApi
