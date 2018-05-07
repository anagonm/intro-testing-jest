const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe("sum", () => {
  it('adds positive and negative numbers', () => {
    expect(sum(1, -2)).toBe(-1);
    expect(sum(0,-2)).toBe(-2);
  });
  it('adds decimal numbers', () => {
    expect(sum(1, 0.3)).toBe(1.3);
    expect(sum(1, -0.3)).toBe(0.7);
  });
})
