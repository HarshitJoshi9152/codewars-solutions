// HarshitJoshi9152 https://github.com/HarshitJoshi9152
// Sunday, January 10, 2021 at 12:34:45 AM GMT+5:30 
// javascript 

const { groupCollapsed } = require("console");
const { parse } = require("path");

// Molecule to atoms https://www.codewars.com/kata/52f831fa9d332c6591000511 
// category: algorithms 
// rank: 5 kyu 

/*
For a given chemical formula represented by a string, count the number of atoms
of each element contained in the molecule and return an object (associative
array in PHP, `Dictionary<string, int>` in C#, Map<String,Integer> in
Java).

For example:

javascript
var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

As you can see, some formulas have brackets in them. The index outside the
brackets tells you that you have to multiply count of each atom inside the
bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two
nitrogen atoms and six oxygen atoms.

Note that brackets may be **round, square
or curly** and can also be **nested**. Index after the braces is **optional**. 
*/

/*
function parseMolecule(formula) {
	let atomMap = {};
	let grps = [];
	let prev_grp = undefined; // or atom
	for (let i in formula) {
		let char = formula[i];
		try {
			Number(char);
			// lastGrp += char
			// eval grp
			continue;
		} catch {}
		if (["[","("].includes(char)) {
			grpStart = true;
			grps.push([])
		} else if (["]",")"].includes(char)) {
			grpEnd = true;
			// ok so what if its a group in a group ....
			prev_grp = grps.pop();
			// we should eval here too.
			// next should be a number should it ? not required i guess..
		}
		// if char is not any one from above then it is surely an atom
		if (grpStart) {
			// if a grp is currently opened then we have to add the atom to its count;
			grps[grps.length - 1].push(char);
		}
		// no grp is there.. and its an atom..

	}
	return atomMap;
}
*/

// function parseMolecule(formula) {
// 	// so str has 2 parts  1 -> atomName | GrpName and 2 -> count
// 	let obj = {};
// 	tail = [];
// 	for (const i in formula) {
// 		if (Object.hasOwnProperty.call(formula, i)) {
// 			const char = formula[i];
// 			if (!['[',']','(',')','1','2','3',"4","5","6","7","8",'9'].includes(char)) {
// 				// its an atom

// 			}
// 		}
// 	}
// }

function parse_molecules(str) {
	let obj = {}
	let prev_char = undefined;
	// let grps = [];
	for (const char of str) {
		console.log(char)
		try {
			// its a count
			let count = Number(char)
			if (Number.isNaN(count)) {
				throw new Error("not a number")
			}
			obj[prev_char] = count;
			if (prev_char == undefined) {
				// bad formula
			}
			prev_char = undefined
		} catch {
			// // regexp
			// let brace = char.match(/[\(\)\[\]]/)
			// // if (["[","("].includes(char)) {
			// // 	// grpStart
			// // 	grp += char;
			// // 	unpack_grp(grp)
			// // }
			// if (brace[o] == undefined) {

			// }
			// its an atom
			obj[char] = 1;
			prev_char = char;
		}
	}
	return obj;
}

const log = console.log;

function parseMolecules(str) {
	let grps_indexes = [...str.matchAll(/[\(\)\[\]]/g)];
	// useless count lol;
	let grp_count = 0;
	let groups = [];
	// for (let braceObj of grps_indexes) {
	// 	brace = braceObj[0];
	// 	if ([')',']'].includes(brace)) {
	// 		continue;
	// 	}
	// 	groups.push()
	// 	grp_count++;
	// }
	for (let i in str) {
		let char = str[i];
		if (['(','['].includes(char)) {
			// group
			let brace = char;
			let start = +i;
			let end = str.lastIndexOf((brace == '(') ? ')' : ']');
			// there will always be a count next to the group closing brace so..
			grp = str.slice(start, end + 2);
			groups.push(grp);
		}
	}
	console.log(groups);
	return groups;
	// for (let braceObj of grps_indexes) {
	return grp_count;
}

let mem = [];
function eval_grp(grp) {
	let count = +grp[grp.length - 1];
	grp = grp.slice(1, grp.length - 2); // grp excluding []$num
	if (grp.match(/[\(\[]/) !== null) {
		// no grp is here.
		throw new Error();
	}
	let parsed = parse_molecules(grp);
	for (const prop in parsed) {
		parsed[prop] *= count
	}
	return parsed;
}

function add_obj(a,b) {
	// lol mutates a object
	for (let prop in b) {
		if (!a[prop])
			a[prop] = b[prop];
		else
			a[prop] += b[prop];
	}
	// return a;
}

var fremySalt = 'K4[ON(SO3)2]2';
let grps = parseMolecules(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

for (const grp of grps.slice(1)) {
	log(eval_grp(grp))
}

// var water = 'H2O';
// console.log(parseMolecules(water));


// this was more difficult for me