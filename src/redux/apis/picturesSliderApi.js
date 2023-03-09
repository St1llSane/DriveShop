import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const picturesSliderApi = createApi({
  reducerPath: 'picturesSliderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  endpoints: (build) => ({
    getPicturesSlider: build.query({
      query: () => `picturesSlider`,
    }),
  }),
})

export const { useGetPicturesSliderQuery } = picturesSliderApi
