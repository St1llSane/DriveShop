import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const DriveShopApi = createApi({
  reducerPath: 'DriveShopApi',
  tagTypes: ['Favorites', 'Cart'],
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
    getProducts: build.query({
      query: ({ location, filter }) => `${location}?_${filter}`,
    }),
    getFavorites: build.query({
      query: () => `favorites`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Favorites', id })),
              { type: 'Favorites', id: 'LIST' },
            ]
          : [{ type: 'Favorites', id: 'LIST' }],
    }),
    addFavorite: build.mutation({
      query: (body) => ({
        url: 'favorites',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
    }),
    deleteFavorite: build.mutation({
      query: (id) => ({
        url: `favorites/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
    }),
    getCart: build.query({
      query: () => `cart`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Cart', id })),
              { type: 'Cart', id: 'LIST' },
            ]
          : [{ type: 'Cart', id: 'LIST' }],
    }),
    addCartItem: build.mutation({
      query: (body) => ({
        url: `cart`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),
    deleteCartItem: build.mutation({
      query: (id) => ({
        url: `cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetPicturesSliderQuery,
  useGetStockItemQuery,
  useGetCategoriesQuery,
  useGetPopularSliderQuery,
  useGetProductsQuery,
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetCartQuery,
  useAddCartItemMutation,
  useDeleteCartItemMutation,
} = DriveShopApi
