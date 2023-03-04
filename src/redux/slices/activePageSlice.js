import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activePage: '',
}

export const activePageSlice = createSlice({
  name: 'activePage',
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload
    },
  },
})

export const activePageSelector = (state) => state.activePageSlice

export const { setActivePage } = activePageSlice.actions

export default activePageSlice.reducer
