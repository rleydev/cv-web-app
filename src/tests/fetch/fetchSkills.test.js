import { fetchSkills } from "../../services/store/actions/getSkills.actions";

describe('fetchSkills', () => {
    it('should fetch skills successfully', async () => {
      
      const mockSkillsArray = ['Skill 1', 'Skill 2'];
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockSkillsArray),
      });
  
      
      const result = await fetchSkills();
  

      expect(fetch).toHaveBeenCalledWith('https://localhost:3000/api/skills');
  
   
      expect(result).toEqual(mockSkillsArray);
    });
  
    it('should throw an error when fetching skills fails', async () => {

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
      });
  

      await expect(fetchSkills()).rejects.toThrow('Error fetching education data');
    });
});

  
  
  
  
  
  
  