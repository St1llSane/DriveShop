import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	rangeValues: {
		min: 0,
		max: 0,
	},
}

const filtersRangeSlice = createSlice({
	name: 'filtersRange',
	initialState,
	reducers: {
		setRangeValues: (state, action) => {
			state.rangeValues = action.payload
		},
	},
})

export const filtersRangeSelector = (state) => state.filtersRangeSlice
export const filtersRangeValuesSelector = (state) => state.filtersRangeSlice.rangeValues

export const { setRangeValues } = filtersRangeSlice.actions

export default filtersRangeSlice.reducer
