import api from "../services/api";

describe("Test api functions", () => {
  it("should return a movie when i call getMovieById() with valid id", async () => {
    const id = "da622e99-dea1-4f98-a0db-c6bd2b6a5f0d";
    const result = await api.getMovieById(id);

    expect(result).not.toBeNull();
    expect(result.id).toBe(id);
  });

  it("should return a list of movies when i call getCategoryById()", async () => {
    const id = "some-id";
    const result = await api.getCategoryById(id);

    expect(result).not.toBeNull();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });
});
