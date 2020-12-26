// const CHALK = require("chalk");

// function loneliest(number) {
// 	const list = String(number).split("").map((elm) => Number(elm));
// 	// converting the numbers to an array of strings then back to array of numbers.
// 	console.log(CHALK `{red ${list}}`);
// 	let minimumLonliness = Number.POSITIVE_INFINITY;
// 	let lonelinessOfOne = Number.POSITIVE_INFINITY;
// 	let counter = 0;
// 	for (let i in list) {
// 		// 34315
// 		++counter;
// 		const val = list[i];
// 		console.log(CHALK.blue.bold.underline(val));
// 		let loneliness;
// 		if (i == 0) {
// 			loneliness = getOrderedSlice(i + 1, val, list).reduce((acc, item) => {
// 				acc += item;
// 				return acc;
// 			});
// 			if (loneliness < minimumLonliness && val == 1) {
// 				lonelinessOfOne = loneliness;
// 				minimumLonliness = loneliness;
// 			}
// 			else if (loneliness < minimumLonliness) {
// 				minimumLonliness = loneliness;
// 			}
// 			console.log(CHALK.green.bold.underline(loneliness));
// 		} else if (i == list.length - 1) {
// 			loneliness = getOrderedSlice(i - val + 1, i, list).reduce((acc, item) => {
// 				acc += item;
// 				return acc;
// 			});
// 			if (loneliness < minimumLonliness && val == 1) {
// 				lonelinessOfOne = loneliness;
// 				minimumLonliness = loneliness;
// 			}
// 			if (loneliness < minimumLonliness)
// 				minimumLonliness = loneliness;
// 			console.log(CHALK.green.bold.underline(loneliness));
// 		} else {
// 			if (i == 1)
// 				console.log(i,val)
// 			// right look
// 			loneliness += getOrderedSlice(i + 1, val, list).reduce((acc, item) => {
// 				acc += item;
// 				return acc;
// 			});
// 			// left look
// 			loneliness += getOrderedSlice(i - val + 1, i, list).reduce((acc, item) => {
// 				acc += item;
// 				return acc;
// 			});
// 			if (loneliness < minimumLonliness && val == 1) {
// 				lonelinessOfOne = loneliness;
// 				minimumLonliness = loneliness;
// 			}
// 			if (loneliness < minimumLonliness) {
// 				minimumLonliness = loneliness;
// 			}
// 			console.log(CHALK.green.bold.underline(loneliness));
// 		}
// 		console.log(minimumLonliness, lonelinessOfOne, counter);
// 	}
// 	return lonelinessOfOne == minimumLonliness;
// }


// function getOrderedSlice(start, len, arr) {
// 	start = (start < 0) ? 0 : start;
// 	len = (len > arr.length - 1) ? arr.length - 1 : len;
// 	return arr.slice(start, start + len);
// }

// console.log(loneliest(34315)) //output: true;



function loneliest(number) {
	const list = String(number).split("").map((elm) => Number(elm));
	// converting the numbers to an array of strings then back to array of numbers.
	//console.log(CHALK `{red ${list}}`);
	let minimumLonliness = Number.POSITIVE_INFINITY;
	let lonelinessOfOne = Number.POSITIVE_INFINITY;
	let counter = 0;
	for (let i in list) {
		i = Number(i)
			// 34315
			++counter;
		const val = list[i];
		//console.log(CHALK.blue.bold.underline(val));
		let loneliness = 0;
		if (val == 0) {
			if (loneliness < minimumLonliness) {
				minimumLonliness = loneliness;
			}
			continue;
		}
		if (i == 0) {
			loneliness = getOrderedSlice(i + 1, val, list).reduce((acc, item) => {
				acc += item;
				return acc;
			});
			if (loneliness < minimumLonliness && val == 1) {
				lonelinessOfOne = loneliness;
				minimumLonliness = loneliness;
			} else if (loneliness < minimumLonliness) {
				minimumLonliness = loneliness;
			}
			//console.log(CHALK.green.bold.underline(loneliness));
		} else if (i == list.length - 1) {
			loneliness = getOrderedSlice(i - val, val, list).reduce((acc, item) => {
				acc += item;
				return acc;
			});
			if (loneliness < minimumLonliness && val == 1) {
				lonelinessOfOne = loneliness;
				minimumLonliness = loneliness;
			}
			if (loneliness < minimumLonliness)
				minimumLonliness = loneliness;
			//console.log(CHALK.green.bold.underline(loneliness));
		} else {
			if (i == 3)
				console.log(i, val)
			// right look
			loneliness += getOrderedSlice(i + 1, val, list).reduce((acc, item) => {
				acc += item;
				return acc;
			});
			// left look
			loneliness += getOrderedSlice(i - val, val, list).reduce((acc, item) => {
				acc += item;
				return acc;
			});
			if (loneliness <= minimumLonliness && val == 1) {
				lonelinessOfOne = loneliness;
				minimumLonliness = loneliness;
			}
			if (loneliness < minimumLonliness) {
				minimumLonliness = loneliness;
			}
			//console.log(CHALK.green.bold.underline(loneliness));
		}
		console.log(minimumLonliness, lonelinessOfOne, i, val, loneliness);
	}
	return lonelinessOfOne == minimumLonliness;
}


function getOrderedSlice(start, len, arr) {
	start = (start < 0) ? 0 : start;
	len = (len > arr.length - 1) ? arr.length - 1 : len;
	return arr.slice(start, start + len);
}

// console.log(loneliest(34315)) //output: true;

// rihht look GOooODD
//console.log(getOrderedSlice(3 + 1, 1, [3,4,3,1,5]))
// left look NOW GOOOOD
//console.log(getOrderedSlice(3 - 1 , 1, [3,4,3,1,5,]))

// it doesnt work with this number 40694.

console.log(loneliest(40694));
