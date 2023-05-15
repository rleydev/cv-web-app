import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as educationReducer } from "./slices/education.slice";

const reducers = combineReducers({
    educationReducer,
})

export default configureStore({
    reducer: {reducers},
    devTools: true
})