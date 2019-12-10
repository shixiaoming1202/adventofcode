describe("Day 1", function() {
  var Solution = require('../../2019/d1');
  var solution = new Solution();

  it("getFuel function", function() {
   	expect(solution.getFuel(12)).toBe(2);
   	expect(solution.getFuel(14)).toBe(2);
   	expect(solution.getFuel(1969)).toBe(654);
   	expect(solution.getFuel(100756)).toBe(33583);
  });

  it("getFuel function", function() {
   	expect(solution.getAdditionalFuel(12)).toBe(2);
   	expect(solution.getAdditionalFuel(1969)).toBe(966);
   	expect(solution.getAdditionalFuel(100756)).toBe(50346);
  });
});
