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
  }),
})

export const { useGetPicturesSliderQuery, useGetStockItemQuery } = DriveShopApi
