// HarshitJoshi9152 https://github.com/HarshitJoshi9152
// Sunday, January 10, 2021 at 12:34:45 AM GMT+5:30 
// javascript 


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

function parseMolecules(molecule) {
	let groups = [];
	let brackets = [];
	let prev = undefined;
	for (let i = 0; i < molecule.length; ++i) {
		let a = molecule[i];
		log('\x1b[91m',i, a,"\x1b[0m")
		// check for number;
		if (!Number.isNaN(Number(a))) {
			// multiply with group on top of the stack -- on do it only if brackets have been previously opened.
			if (groups.length !== 0) {
				// raise full grp by Number(a);
				// brackets have been opened so raise all...
				for (let ii of groups[groups.length - 1]) {
					ii.count *= Number(a);
				}
				// also unite/add these counts in the group delow this grp.
				// TODO: time to change the obj structure
				// for (let ii of groups[groups.length - 2]) {
				// 	ii.name
				// }
			} else {
				// find prev in grp and assign number;
				let l = groups[groups.length] // last group;
				l[l.length - 1].count *= Number(a); // last item of last group.count *= Number(a);
			}
			continue;
		}
		if (a == '[' || a == '(') {
			// brackets start
			// multiply number with entire grp;
			brackets.push(a);
			groups.push([]);
			continue;
		}
		let _sqr = true;
		let _round = true;
		if (a == ']' || (_sqr = false) || a == ')' || (_round = false)) {
			// brackets close
			// group is ready to be evaluated in next turn
			let popped_bracket = brackets.pop();
			if (_sqr) {
				if (popped_bracket == '[') {
					// no error correct brackets hence correct formula
					// union the groups
				}
			}
			if (_round) {
				if (popped_bracket == '(') {
					// no error correct brackets hence correct formula
					// union the groups
				}
			}
			else {
				throw new Error(`invalid formula; bad brackets at index ${i}`);
			}
			continue;
		}
		// now it must be an atom
		// also check if prev + a == "Mg"; // etc;
		if (groups.length == 0) {
			groups.push([a]);
			continue;
		}
		// else
		groups[groups.length - 1].push({name:a, count:1});
	}
	return groups[groups.length - 1]
}


var fremySalt = 'K4[ON(SO3)2]2';
let grps = parseMolecules(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

log(grps);
/*
for (const grp of grps.slice(1)) {
	log(eval_grp(grp))
}
*/
// var water = 'H2O';
// console.log(parseMolecules(water));

// IDEA :: EVERYTHING IS A GROUP.

// this was more difficult for me
// fromula -> K4[ON(SO3)2]2
// k no brackets (default 1) * [,number]
// bracket start category start
// store O default // todo on bracket completion
// store N default // todo on bracket completion
// bracket start new category start
// store S default // todo on bracket completion
// store O default * number 
// bracket close will a number always be here ?
// 	if so multiply the default count of previous grp with num
// 	and integrate into previous group
// 	bracket close multiply defaults with num
// 	return group....
