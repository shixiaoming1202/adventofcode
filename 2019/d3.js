class Solution {
	constructor() {}

	// @input: "R8"
	// @output "RRRRRRRR"
	transferMove(move) {
		const direction = move[0];
		const distance = Number(move.slice(1));

		return Array(distance).fill(direction).join("");
	}

	// @input wire: ["R8", "U5", "L5" ,"D3"]
	// @output ["x1,y1", "x2,y2", ...]
	getPath(wire) {
		let x = 0;
		let y = 0;

		return wire
			.map(move => this.transferMove(move))
			.join("")
			.split("")
			.map(direction => {
				switch(direction) {
					case "R":
						x += 1;
						break;
					case "L":
						x -= 1;
						break;
					case "U":
						y += 1;
						break;
					case "D":
						y -= 1;
						break;
				}

				return `${x},${y}`;
			});
	}

	questionOne(wireOne, wireTwo) {
		const pathOne = this.getPath(wireOne);
		const pathTwo = this.getPath(wireTwo);

		const intersection = pathOne
			.filter(point => (
				pathTwo.includes(point))
			)
			.map(point => {
				const list = point.split(",");
				return Math.abs(list[0]) + Math.abs(list[1]);
			});

		return Math.min(...intersection);
	}

	questionTwo(wireOne, wireTwo) {
		const pathOne = this.getPath(wireOne);
		const pathTwo = this.getPath(wireTwo);

		const intersection = pathOne
			.filter(point => (
				pathTwo.includes(point))
			)
			.map(point => (
				pathOne.indexOf(point) + pathTwo.indexOf(point)
			));

		return Math.min(...intersection) + 2;
	}
}

module.exports = Solution;
