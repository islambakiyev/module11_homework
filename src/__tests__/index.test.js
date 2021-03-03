import { getPercents } from "../index.js";

describe("test multiply", () => {
  it("200% from 30 to equal 60", () => {
    const result = getPercents(200, 30);
    expect(result).toBe(60);
  })
    it("75% from 100 to equal 75", () => {
        const result = getPercents(75, 100);
        expect(result).toBe(75);
    })
    it("50% from 30 to equal 15", () => {
      const result = getPercents(50, 30);
      expect(result).toBe(15);
    });
});
