import { createAsyncThunk } from '@reduxjs/toolkit';

const postSkill = async (skillData) => {
    try {
      const response = await fetch('/api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(skillData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to add skill.');
      }
  
      const responseData = await response.json();
      return responseData.skill;
    } catch (error) {
      throw new Error('Failed to add skill.');
    }
  };

export const addSkill = createAsyncThunk('skills/addSkill', async(skillData, thunkApi) => {
    try {
        const response = await postSkill(skillData)
        console.log(response)
        return response
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
});