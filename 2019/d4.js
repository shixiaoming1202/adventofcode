class Solution {
	constructor() {}

	adjacentDigits(pwd) {
		const input = String(pwd);

		return input.split("").some((ele, idx, list) => (
			ele === list[idx + 1]
		));
	}

	noDecrease(pwd) {
		const input = String(pwd);
		const sorted = input.split("").sort().join("");

		return (input === sorted);
	}

	questionOne(start, end) {
		let count = 0;

		for (let pwd = start; pwd <= end; pwd++) {
			if (this.adjacentDigits(pwd) && this.noDecrease(pwd)) {
				count++;
			}
		}

		return count;
	}

	noLargerMatch(pwd) {
		const input = String(pwd);

		return input.split("").some((ele, idx, list) => (
			ele === list[idx + 1] &&
			ele !== list[idx - 1] &&
			ele !== list[idx + 2]
		));
	}

	questionTwo(start, end) {
		let count = 0;

		for (let pwd = start; pwd <= end; pwd++) {
			if (this.noLargerMatch(pwd) && this.noDecrease(pwd)) {
				count++;
			}
		}

		return count;
	}
}

module.exports = Solution;
