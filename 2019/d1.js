class Solution {
	constructor() {}

	getFuel(mass) {
		return Math.floor(Number(mass) / 3) - 2;
	}

	// input = $("pre").innerHTML.trim().split("\n")

	questionOne(input) {
		return input.map(this.getFuel)
			.reduce((a, c) => (a + c));
	}

}

module.exports = Solution;
