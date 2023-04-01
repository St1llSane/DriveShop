import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	active: false,
}

const burgerSlice = createSlice({
	name: 'burger',
	initialState,
	reducers: {
		setActive: (state, action) => {
			state.active = action.payload
		},
	},
})

export const burgerSelector = (state) => state.burgerSlice

export const { setActive } = burgerSlice.actions

export default burgerSlice.reducer
