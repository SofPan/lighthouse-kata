// start at 11:20am -- REMOVE THIS LINE
const blocksAway = function (directions) {
	const destination = {
		east: 0,
		north: 0,
	};
	let facing = "N";
	while (directions.length > 0) {
		let dirPair = directions.slice(0, 2);
		// update directions to remove the latest pair
		directions = directions.slice(2, directions.length);
		// conditionally check directions
		if (destination.north === 0 && dirPair[0] === "left") {
			// travel north when at bottom "row"
			facing = "N";
			destination.north = destination.north + dirPair[1];
		} else if (destination.east === 0 && dirPair[0] === "right") {
			// travel east when at leftmost "column"
			facing = "E";
			destination.east = destination.east + dirPair[1];
		} else {
			if (facing === "N") {
				if (dirPair[0] === "left") {
					facing = "W";
					destination.east = destination.east - dirPair[1];
				} else {
					facing = "E";
					destination.east = destination.east + dirPair[1];
				}
			} else if (facing === "E") {
				if (dirPair[0] === "left") {
					facing = "N";
					destination.north = destination.north + dirPair[1];
				} else {
					facing = "S";
					destination.north = destination.north - dirPair[1];
				}
			} else if (facing === "S") {
				if (dirPair[0] === "right") {
					facing = "W";
					destination.east = destination.east - dirPair[1];
				} else {
					facing = "E";
					destination.east = destination.east + dirPair[1];
				}
			} else {
				if (dirPair[0] === "right") {
					facing = "N";
					destination.north = destination.north + dirPair[1];
				} else {
					facing = "S";
					destination.north = destination.north - dirPair[1];
				}
			}
		}
	}
	return destination;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
	blocksAway([
		"left",
		1,
		"right",
		1,
		"left",
		1,
		"right",
		1,
		"left",
		1,
		"right",
		1,
	])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
