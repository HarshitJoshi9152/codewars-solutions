//HarshitJoshi9152 11:46 6/6/2020
//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript


function anagrams(word, words) {
	const anagramList = [];
	for (let i of words) {
		if (arrayEqual(word, i)) {
			// its an anagram
			anagramList.push(i)
		}
	}
	return anagramList;
}

function arrayEqual(array1, array2) {
	for (i of array1) {
		if (array2.includes(i)) {
			continue
		}
		return false;
	}
	for (i of array2) {
		if (array1.includes(i)) {
			continue
		}
		return false;
	}
	return true;
}

// to add into utility library js
function getObjWithProps(props, assignmentValue = []) {
	const obj = {};

	for (let i of props) {
		obj[i] = assignmentValue
	}

	return obj;
}

// tests

console.log(anagrams("laser", ["lazing", "lazy", "lacer"]))
