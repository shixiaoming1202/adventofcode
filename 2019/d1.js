class Solution {
	constructor() {}

	getFuel(mass) {
		return Math.floor(Number(mass) / 3) - 2;
	}

	getAdditionalFuel(mass) {
		let fuel = mass;
		let total = 0;

		do {
			fuel = Math.max(this.getFuel(fuel), 0);
			total += fuel;
		}
		while (fuel > 0)

		return total;
	}

	// input = $("pre").innerHTML.trim().split("\n")

	questionOne(input) {
		return input
			.map(i => this.getFuel(i))
			.reduce((a, c) => (a + c));
	}

	questionTwo(input) {
		return input
			.map(i => this.getAdditionalFuel(i))
			.reduce((a, c) => (a + c));
	}
}

module.exports = Solution;
