const { add, divide } = require("../calculator");

test("addition", () => {
  expect(add(2, 3)).toBe(5);
});

test("division par zéro", () => {
  expect(() => divide(5, 0)).toThrow();
});

test("multiplication", () => {
  expect(() => multiply(2, 3)).toThrow();
});   

