import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSkills = async () => {
    const response = await fetch("https://localhost:3000/api/skills")

    if (!response.ok) {
        throw new Error("Error fetching education data")
    }

    const skillsArray = response.json();
   
    return skillsArray
}

export const getSkills = createAsyncThunk('skills', async(_, thunkApi) => {
    try {
        const response = await fetchSkills()
        console.log(response.skills)
        return response.skills
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})