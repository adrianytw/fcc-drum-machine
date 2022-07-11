import { configureStore } from "@reduxjs/toolkit";

import keysReducer from "../features/keysSlice";
import displayReducer from "../features/displaySlice"



export const store = configureStore({
    reducer: {
        keys: keysReducer,
        display: displayReducer,
    },
})