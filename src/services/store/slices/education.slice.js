import { createSlice } from "@reduxjs/toolkit";
import { getEducation } from "../actions/education.actions";

export const educationSlice = createSlice({
    name: "educations",
    initialState: {
        isLoading: false,
        error: null,
        educationArray: []
    },
    reducers: {

    }, 
    extraReducers: builder => {
        builder.addCase(getEducation.pending, state => {
            state.isLoading = true
        })
        .addCase(getEducation.fulfilled, (state, action) => {
            state.isLoading = false
            state.educationArray = action.payload
        })
        .addCase(getEducation.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
            state.educationArray = []
        })
    }
})

export const { actions, reducer} = educationSlice