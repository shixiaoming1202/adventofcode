describe("Day 3", function() {
	var Solution = require('../../2019/d3');
	var solution = new Solution();

	it("questionOne function", function() {
		expect(solution.questionOne(
			["R8","U5","L5","D3"],
			["U7","R6","D4","L4"]
		)).toEqual(6);
		expect(solution.questionOne(
			["R75","D30","R83","U83","L12","D49","R71","U7","L72"],
			["U62","R66","U55","R34","D71","R55","D58","R83"]
		)).toEqual(159);
		expect(solution.questionOne(
			["R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51"],
			["U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"]
		)).toEqual(135);
	});

	it("questionTwo function", function() {
		expect(solution.questionTwo(
			["R8","U5","L5","D3"],
			["U7","R6","D4","L4"]
		)).toEqual(30);
		expect(solution.questionTwo(
			["R75","D30","R83","U83","L12","D49","R71","U7","L72"],
			["U62","R66","U55","R34","D71","R55","D58","R83"]
		)).toEqual(610);
		expect(solution.questionTwo(
			["R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51"],
			["U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"]
		)).toEqual(410);
	});
});
