// HarshitJoshi9152 https://github.com/HarshitJoshi9152
// Tuesday, February 23, 2021 at 12:31:49 AM GMT+5:30
// javascript

// Nesting Structure Comparison https://www.codewars.com/kata/520446778469526ec0000001
// category: algorithms
// rank: 4 kyu

/*
Complete the function/method (depending on the language) to return
`true`/`True` when its argument is an array that has the same nesting
structures and same corresponding length of nested arrays as the first
array.

For example:

javascript
//  should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     


~~~if:javascript
For your convenience, there is already a function
'isArray(o)' declared and defined that returns true if its argument is an
array, false otherwise.
~~~

~~~if:php
You may assume that all arrays passed in
will be non-associative.
~~~ 
*/

function sameStructureAs(a, b) {
	// console.log(a, b);
	if (a.length !== b.length) {
		return false;
	}

	for (let i in a) {
		const itemA = a[i];
		const itemB = b[i];
		if (Array.isArray(itemA)) {
			if (!Array.isArray(itemB)) {
				return false;
			} else {
				// if this both items are arrays we must check deeper
				let result = sameStructureAs(itemA, itemB);
				if (!result) {
					return false;
				}
			}
		}
	}
	return true;
}

// code submitted on website !
Array.prototype.sameStructureAs = function (other) {
	if (this.length !== other.length) {
		return false;
	}

	for (let i in this) {
		const itemA = this[i];
		const itemB = other[i];
		if (Array.isArray(itemA)) {
			if (!Array.isArray(itemB)) {
				return false;
			} else {
				// if this both items are arrays we must check deeper
				let result = itemA.sameStructureAs(itemB);
				if (!result) {
					return false;
				}
			}
		}
	}
	return true;
};

//  should return true
console.log([1, 1, 1], [2, 2, 2], sameStructureAs([1, 1, 1], [2, 2, 2]));
console.log(
	[1, [1, 1]],
	[2, [2, 2]],
	sameStructureAs([1, [1, 1]], [2, [2, 2]])
);

// should return false
console.log(
	[1, [1, 1]],
	[[2, 2], 2],
	sameStructureAs([1, [1, 1]], [[2, 2], 2])
);
console.log([1, [1, 1]], [[2], 2], sameStructureAs([1, [1, 1]], [[2], 2]));

// should return true
console.log([[[], []]], [[[], []]], sameStructureAs([[[], []]], [[[], []]]));

// should return false
console.log([[[], []]], [[1, 1]], sameStructureAs([[[], []]], [[1, 1]]));
