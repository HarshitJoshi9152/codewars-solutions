
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// this code will only work for primitive values.
function arrayDiff(a, b)
{
	for (let i in a)
	{ // using a while loop inhere could work but i dont like the sound of that.
		if (b.includes(a[i]))
		{
			//splice alters the position of elms in list
			//a.splice(i, 1, undefined) // doesnt work
			//a = a.filter((val, index)=>{return val !== a[i]})
			delete a[i]
		}
	}
	return a.flat();
}


console.log(arrayDiff([1,4,1,2,42,2,1], [1,2,3]))
console.log(arrayDiff([2,3,4], [3]))
console.log(arrayDiff([1,2,2], [2]))

console.log('-'.repeat(80))

// correct solution
function arrayDiff(a, b) {
	for (let i in a) {
		if (b.includes(a[i])) {
			delete a[i]
		}
	}
	return a.flat();
}

Array.prototype.flat = function() {
	const flatArray = [];
	for (let i of this) {
		if (i !== undefined && i !== null)
			flatArray.push(i)
	}
	return flatArray;
}

log = console.log
//arrayDiff()
log(arrayDiff([0,-7,-9,-7,-8,-11,20,14,17,-3],[-3]))
