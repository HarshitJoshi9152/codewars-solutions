
//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
//
//HarshitJoshi9152 1:50 5/7/2020


function count (string) {
	const dict = getObjWithProps(string, 0);
	
	for (const i of string) {
		dict[i]++
	}
	return dict;
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
log = console.log
// Test.assertDeepEquals(count("aba"), { a: 2, b: 1 }); 
// Test.assertDeepEquals(count(""), {});    

log(count("aba"));// { a: 2, b: 1 }
log(count(""));
