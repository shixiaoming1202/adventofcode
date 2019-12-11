class Solution {
	constructor() {}

	runProgram(program, input = 0) {
		const opcode = Number(program[input]);
		const index = program[input + 3];

		if (opcode === 99 || index === undefined) {
			return false;
		}

		const x = Number(program[program[input + 1]]);
		const y = Number(program[program[input + 2]]);

		switch (opcode) {
			case 1:
				program[index] = x + y;
				break;
			case 2:
				program[index] = x * y;
				break;
		}

		return program;
	}

	// input = $("pre").innerHTML.trim().split(",")
	// input[1] = 12;
	// input[2] = 2;

	questionOne(input) {
		let result = input;
		let index = 0;
		let output;

		do {
			output = this.runProgram(result, index);
			index += 4;
			if (output) {
				result = output;
			}
		}
		while(output)

		return result;
	}

	// input = $("pre").innerHTML.trim().split(",")
	
	questionTwo(input) {
		const TARGET_OUTPUT = 19690720;

		let noun;
		let verb;
		let output;

		for (noun = 0; noun <= 99; noun++) {
			for (verb = 0; verb <= 99; verb++) {
				let newInput = [].concat(input);
				newInput[1] = noun;
				newInput[2] = verb;

				output = this.questionOne(newInput);

				if (output[0] === TARGET_OUTPUT) {
					return 100 * noun + verb;
				}
			}
		}
	}
}

module.exports = Solution;
