describe("Day 2", function() {
  var Solution = require('../../2019/d2');
  var solution = new Solution();

  it("runProgram function", function() {
	expect(solution.runProgram([1,0,0,0,99])).toEqual([2,0,0,0,99]);
	expect(solution.runProgram([2,3,0,3,99])).toEqual([2,3,0,6,99]);
	expect(solution.runProgram([2,4,4,5,99,0])).toEqual([2,4,4,5,99,9801]);
  });

  it("questionOne function", function() {
   	expect(solution.questionOne([1,0,0,0,99])).toEqual([2,0,0,0,99]);
   	expect(solution.questionOne([2,3,0,3,99])).toEqual([2,3,0,6,99]);
   	expect(solution.questionOne([2,4,4,5,99,0])).toEqual([2,4,4,5,99,9801]);
   	expect(solution.questionOne([1,1,1,4,99,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
  });
});
