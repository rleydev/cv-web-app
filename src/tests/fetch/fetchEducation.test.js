import { fetchEducation } from "../../services/store/actions/education.actions";

describe('fetchEducation', () => {
    it('should fetch education data successfully', async () => {

      const mockEducationArray = ['Education 1', 'Education 2'];
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockEducationArray),
      });
  
     
      const result = await fetchEducation();
  

      expect(fetch).toHaveBeenCalledWith('https://localhost:3000/api/educations');
  

      expect(result).toEqual(mockEducationArray);
    });
  
    it('should throw an error when fetching education data fails', async () => {
   
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
      });
  

      await expect(fetchEducation()).rejects.toThrow('Error fetching education data');
    });
});
  
  
  
  
  
  
  
  