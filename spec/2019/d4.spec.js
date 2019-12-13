describe("Day 4", function() {
	var Solution = require('../../2019/d4');
	var solution = new Solution();

	it("adjacentDigits function", function() {
		expect(solution.adjacentDigits(122345)).toBe(true);
		expect(solution.adjacentDigits(111111)).toBe(true);
		expect(solution.adjacentDigits(223450)).toBe(true);
		expect(solution.adjacentDigits(123789)).toBe(false);
	});

	it("noDecrease function", function() {
		expect(solution.noDecrease(111123)).toBe(true);
		expect(solution.noDecrease(135679)).toBe(true);
		expect(solution.noDecrease(111111)).toBe(true);
		expect(solution.noDecrease(223450)).toBe(false);
		expect(solution.noDecrease(123789)).toBe(true);
	});

	it("noLargerMatch function", function() {
		expect(solution.noLargerMatch(112233)).toBe(true);
		expect(solution.noLargerMatch(123444)).toBe(false);
		expect(solution.noLargerMatch(111122)).toBe(true);
	});
});
