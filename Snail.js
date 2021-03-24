// HarshitJoshi9152 https://github.com/HarshitJoshi9152
// Monday, March 22, 2021 at 11:21:33 PM GMT+5:30
// javascript

// Snail https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
// category: algorithms
// rank: 4 kyu

/*
## Snail Sort

Given an `n x n` array, return the array elements arranged from
outermost elements to the middle element, traveling clockwise.



This image will illustrate things more clearly:

<img
src="http://www.haan.lu/files/2513/8347/2456/snail.png" />

NOTE: The idea is
not sort the elements from the lowest value to the highest; the idea is to
traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0
(empty matrix) is represented as en empty array inside an array `[[]]`. 
*/

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

const log = console.log;

function snail(grid) {
	// to cover a few test cases
	if (grid.length == 1) {
		return grid[0][0] ? [grid[0][0]] : [];
	}

	let seenCells = [];

	function isLastCell(r, c) {
		// return (
		// 	r == Math.ceil(grid.length / 2) - 1 &&
		// 	c == Math.ceil(grid[0].length / 2) - 1
		// );
		if (`${r},${c}` in seenCells) {
			return true;
		}
	}

	function get_c_right(r, c, limit) {
		// never reaches limit
		let l = [];
		// we dont want to push the first value since it coinsides with the previous serial
		let i = c + 1;
		for (i; i < limit; i++) {
			l.push([r, i]);
		}
		return [l, [r, i - 1]];
	}
	function get_c_left(r, c, limit) {
		// never reaches limit
		let l = [];
		// we dont want to push the first value since it coinsides with the previous serial
		let i = c - 1;
		for (i; i > limit; i--) {
			l.push([r, i]);
		}
		// because of looping i becomes = to limit; ie length of array
		return [l, [r, i + 1]];
	}
	function get_r_down(r, c, limit) {
		// never reaches limit
		let l = [];
		// we dont want to push the first value since it coinsides with the previous serial
		let i = r + 1;
		for (i; i < limit; i++) {
			l.push([i, c]);
		}
		return [l, [i - 1, c]];
	}
	function get_r_up(r, c, limit) {
		// i reaches limit :correction
		let l = [];
		// we dont want to push the first value since it coinsides with the previous serial
		let i = r;
		for (i; i > limit; i--) {
			l.push([i, c]);
		}
		// todo wait we shouldnt push the last one...!!! [its the starting nah]
		// l.pop();
		return [l, [i, c]];
	}

	// let [startR, startC] = [0, 0];
	let serial = [];

	const center_cell = [Math.ceil(grid.length / 2) - 1][
		Math.ceil(grid[0].length / 2) - 1
	];
	let [R, C] = [0, 0];
	let last_cell = [R, C];
	let l = grid.length;
	while (!isLastCell(R, C)) {
		log({ seenCells });
		// loop 4 times and switch directions each time
		serial.push(grid[R][C]);
		let start_r = R;
		let start_c = C;
		for (let dir of ["right", "down", "left", "up"]) {
			switch (dir) {
				case "right":
					log("right");
					// let coors = [];
					[coors, [R, C]] = get_c_right(R, C, l - start_c);
					log({ R, C, coors });
					// this line is our saviour
					if (coors.length == 0) {
						// no this is a premature return for other cases lol;
						log("right");
						log({ serial });
						return serial;
					}
					for (coor of coors) {
						let [r, c] = coor;
						// if (`${r},${c}` in seenCells) {
						// 	return serial;
						// }
						log(`${r},${c}`);
						seenCells.push(`${r},${c}`);
						serial.push(grid[r][c]);
						// if (isLastCell(...coor)) {
						// 	return serial;
						// }
					}
					break;
				case "left":
					log("left");
					// let coors = [];
					[coors, [R, C]] = get_c_left(R, C, -1 + start_c);
					log({ R, C, coors });
					// this line is our saviour
					if (coors.length == 0) {
						// no this is a premature return for other cases lol;
						log("left");
						log({ serial });
						return serial;
					}
					for (coor of coors) {
						let [r, c] = coor;
						// if (`${r},${c}` in seenCells) {
						// 	return serial;
						// }
						log(`${r},${c}`);
						seenCells.push(`${r},${c}`);
						serial.push(grid[r][c]);
						// if (isLastCell(...coor)) {
						// 	return serial;
						// }
					}
					break;
				case "down":
					log("down");
					// let coors = [];
					[coors, [R, C]] = get_r_down(R, C, l - start_r);
					log({ R, C, coors });
					// this line is our saviour
					if (coors.length == 0) {
						// no this is a premature return for other cases lol;
						log("down");
						log({ serial });
						return serial;
					}
					for (coor of coors) {
						let [r, c] = coor;
						// if (`${r},${c}` in seenCells) {
						// 	return serial;
						// }
						log(`${r},${c}`);
						seenCells.push(`${r},${c}`);
						serial.push(grid[r][c]);
						// if (isLastCell(...coor)) {
						// 	return serial;
						// }
					}
					break;
				case "up":
					log("up");
					// let coors = [];
					[coors, [R, C]] = get_r_up(R, C, 1 + start_c);
					log({ R, C, coors });
					// this line is our saviour
					if (coors.length == 0) {
						// no this is a premature return for other cases lol;
						log("up");
						log({ serial });
						return serial;
					}
					for (coor of coors.slice(0, coors.length - 1)) {
						let [r, c] = coor;
						// hmmm i forgot this wouldnt work because of our limit system
						// if (`${r},${c}` in seenCells) {
						// 	return serial;
						// }
						log(`${r},${c}`);
						seenCells.push(`${r},${c}`);
						serial.push(grid[r][c]);
						// if (isLastCell(...coor)) {
						// 	return serial;
						// }
					}
					break;

				default:
					break;
			}
		}
		// pushing last cell left by UP_FUNC idkwhy will fix that later lol
		serial.push(grid[R][C]);
		if (`${R},${C}` in seenCells) {
			return serial;
		}
		// shifting to right
		[R, C] = [R, C + 1];
		// log("new cycle", R, C);
		// log({ serial });
		// return "debugging ";
		if (`${R},${C}` in seenCells) {
			return serial;
		}
		// if (isLastCell(R, C)) {
		// 	serial.push(grid[R][C]);
		// 	return serial;
		// }
	}
	return serial;
}

function get_c_right(r, c, limit) {
	// never reaches limit
	let l = [];
	// we dont want to push the first value since it coinsides with the previous serial
	let i = c + 1;
	for (i; i < limit; i++) {
		l.push([r, i]);
	}
	return [l, [r, i - 1]];
}
function get_c_left(r, c, limit) {
	// never reaches limit
	let l = [];
	// we dont want to push the first value since it coinsides with the previous serial
	let i = c - 1;
	for (i; i > limit; i--) {
		l.push([r, i]);
	}
	// because of looping i becomes = to limit; ie length of array
	return [l, [r, i + 1]];
}
function get_r_down(r, c, limit) {
	// never reaches limit
	let l = [];
	// we dont want to push the first value since it coinsides with the previous serial
	let i = r + 1;
	for (i; i < limit; i++) {
		l.push([i, c]);
	}
	return [l, [i - 1, c]];
}
function get_r_up(r, c, limit) {
	// i reaches limit :correction
	let l = [];
	// we dont want to push the first value since it coinsides with the previous serial
	let i = r - 1;
	for (i; i > limit; i--) {
		l.push([i, c]);
	}
	// todo wait we shouldnt push the last one...!!! [its the starting nah]
	// l.pop();
	return [l, [i, c]];
}
// todo the limts that i am giving are hard coded SHITTT

// console.log(
// let result = snail([
// 	[1, 2, 3, 4, 5],
// 	[6, 7, 8, 9, 10],
// 	[11, 12, 13, 14, 15],
// 	[16, 17, 18, 19, 20],
// 	[21, 22, 23, 24, 25]
// ]);
// // );

// sol = [
// 	1,
// 	2,
// 	3,
// 	4,
// 	5,
// 	10,
// 	15,
// 	20,
// 	25,
// 	24,
// 	23,
// 	22,
// 	21,
// 	16,
// 	11,
// 	6,
// 	7,
// 	8,
// 	9,
// 	14,
// 	19,
// 	18,
// 	17,
// 	12,
// 	13
// ];
// log(result);
// log(JSON.stringify(result) === JSON.stringify(sol));

// for this case the fault lies in center estimation
// to determine if this is last cell:
// keep list of all cells we have looped over in memory
// if current cell was in memory then previous cell must be the last ??

function snail(grid) {
	if (grid.length == 1) {
		return grid[0][0] ? [grid[0][0]] : [];
	}

	let snail = [];
	let l = grid.length;
	let [startR, startC] = [0, 0];
	let [r, c] = [0, 0];

	while (grid[r][c] !== null) {
		snail.push(grid[r][c]);
		let i;
		// right
		// we dont want to push the first value since it coinsides with the previous serial
		i = c + 1;
		for (i; i < l - startC; i++) {
			if (grid[r][i] == null) {
				// complete
				return snail;
			}
			log("lol");
			snail.push(grid[r][i]);
			grid[r][i] = null;
		}
		c = i - 1;
		// down

		i = r + 1;
		for (i; i < l - startR; i++) {
			if (grid[i][c] == null) {
				return snail;
			}
			log("lol");
			snail.push(grid[i][c]);
			grid[i][c] = null;
		}
		r = i - 1;
		// left
		// we dont want to push the first value since it coinsides with the previous serial
		i = c - 1;
		for (i; i > -1 + startC; i--) {
			if (grid[r][i] == null) {
				// complete {
				return snail;
			}
			snail.push(grid[r][i]);
			grid[r][i] = null;
		}

		c = i + 1; // to turn -1 to 0;
		// up
		i = r - 1;
		log({ i, startR, c });
		for (i; i > startR; i--) {
			if (grid[i][c] == null) {
				// complete
				log("lolUP");
				return snail;
			}
			if (i === startR && c == startC) {
				continue;
			}
			snail.push(grid[i][c]);
			grid[i][c] = null;
		}
		log("sadjsa");
		log(snail);

		r = i + 1;
		[startR, startC] = [startR + 1, startC + 1];
		[r, c] = [startR, startC];
	}
	return snail;
}

q2 = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25]
];

let result = snail(q2);
// );

sol = [
	1,
	2,
	3,
	4,
	5,
	10,
	15,
	20,
	25,
	24,
	23,
	22,
	21,
	16,
	11,
	6,
	7,
	8,
	9,
	14,
	19,
	18,
	17,
	12,
	13
];
log(result);
log(JSON.stringify(result) === JSON.stringify(sol));

// nice !!
