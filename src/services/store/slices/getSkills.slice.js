import { createSlice } from "@reduxjs/toolkit";
import { getSkills } from "../actions/getSkills.actions";
import { addSkill } from "../actions/postSkills.actions";

export const skillsSlice = createSlice({
    name: "skills",
    initialState: {
        isLoading: false,
        error: null,
        skillsArray: [],
    },
    reducers: {

    }, 
    extraReducers: builder => {
        builder.addCase(getSkills.pending, state => {
            state.isLoading = true
        })
        .addCase(getSkills.fulfilled, (state, action) => {
            state.isLoading = false
            state.skillsArray = action.payload
            
        })
        .addCase(getSkills.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
            state.skillsArray = []
        })
        .addCase(addSkill.fulfilled, (state, action) => {
            state.isLoading = false 
            state.skillsArray.unshift(action.payload)
        })
    }
})

export const { actions, reducer} = skillsSlice