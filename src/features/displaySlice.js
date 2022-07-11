import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    text: 'keke',
}

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    updateText(state, action) {
        state.text = action.payload
    },
  },
})

export const { updateText } = displaySlice.actions;

export default displaySlice.reducer