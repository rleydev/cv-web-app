import { configureStore } from '@reduxjs/toolkit';
import { educationSlice } from '../../../services/store/slices/education.slice';
import { getEducation } from '../../../services/store/actions/education.actions';

describe('educationSlice', () => {
    let store;
  
    beforeEach(() => {
      store = configureStore({
        reducer: {
          educations: educationSlice.reducer,
        },
      });
    });
  
    it('should handle getEducation.pending', () => {
      store.dispatch(getEducation());
  
      const state = store.getState().educations;
  
      expect(state.isLoading).toBe(true);
    });
  
    it('should handle getEducation.fulfilled', () => {
      const mockPayload = ['education1', 'education2'];
  
      store.dispatch(getEducation.fulfilled(mockPayload));
  
      const state = store.getState().educations;
  
      expect(state.isLoading).toBe(false);
      expect(state.educationArray).toEqual(mockPayload);
    });
  
    it('should handle getEducation.rejected', () => {
      const mockError = new Error('Some error message');
  
      store.dispatch(getEducation.rejected(mockError));
  
      const state = store.getState().educations;
  
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe(mockError.message);
      expect(state.educationArray).toEqual([]);
    });
});