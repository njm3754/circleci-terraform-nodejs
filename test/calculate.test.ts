import { product, sum } from "../src/calculate";

describe("test sum function", () => {
  it("should return 5 for 2 + 3", () => {
    expect(sum(2, 3)).toEqual(5);
  });
  it("should return 5 for 10 + -50", () => {
    expect(sum(10, -50)).toEqual(-40);
  });
});

describe("test product function", () => {
  it("should return 25 for 5 * 5", () => {
    expect(product(5, 5)).toEqual(25);
  });
  it("should return 100 for 20 * 5", () => {
    expect(product(20, 5)).toEqual(100);
  });
});
