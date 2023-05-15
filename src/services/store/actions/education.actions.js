import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchEducation = async () => {
    const response = await fetch("https://localhost:3000/api/educations")

    if (!response.ok) {
        throw new Error("Error fetching education data")
    }

    const educationArray = response.json();
    return educationArray
}

export const getEducation = createAsyncThunk('educations', async(_, thunkApi) => {
    try {
        const response = await fetchEducation()
        return response
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})