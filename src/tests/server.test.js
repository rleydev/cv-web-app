import { createServer} from "miragejs";

import server from "../services/server"

describe("server", () => {
    let mirageServer;
  
    beforeAll(() => {
      mirageServer = createServer();
      server(mirageServer);
    });
  
    afterAll(() => {
      mirageServer.shutdown();
    });
  
    it("should return education data when GET /api/educations is called", async () => {
      const response = await fetch("/api/educations");
      const data = await response.json();
  
      expect(response.status).toBe(200);
      expect(data.length).toBeGreaterThan(0);
     
    });
  
    it("should return skills data when GET /api/skills is called", async () => {
      const response = await fetch("/api/skills");
      const data = await response.json();
  
      expect(response.status).toBe(200);
      expect(data.skills.length).toBeGreaterThan(0);
  
    });
  
    it("should create a new skill when POST /api/skills is called", async () => {
      const newSkill = { name: "New Skill", range: 50 };
      const response = await fetch("/api/skills", {
        method: "POST",
        body: JSON.stringify(newSkill),
      });
      const data = await response.json();
  
      expect(response.status).toBe(201);
      expect(data.skill).toEqual(expect.objectContaining(newSkill));
    
    });
});