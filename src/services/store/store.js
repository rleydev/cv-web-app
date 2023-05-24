import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as educationReducer } from "./slices/education.slice";
import { reducer as getSkillsReducer } from "./slices/getSkills.slice";

const reducers = combineReducers({
    educationReducer,
    getSkillsReducer
})

export default configureStore({
    reducer: {reducers},
    devTools: true
})