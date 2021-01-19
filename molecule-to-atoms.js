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


function parseMolecule(molecule) {
	let groups = [];
	let brackets = [];
	let recentGrpClosed = false;
	let prev_atom = undefined;
	let prev_no = undefined;
	for (let i = 0; i < molecule.length; ++i) {
		let a = molecule[i];
		// log('\x1b[91m',i, a,"\x1b[0m")
		// check for number;
		if (!Number.isNaN(Number(a))) {
			a = (prev_no) ? Number(prev_no + a) : Number(a);
			// multiply with group on top of the stack -- on do it only if brackets have been previously opened.
			if (recentGrpClosed) {
				// raise full grp by a;
				// brackets have been opened so raise all...
				for (let ii of groups[groups.length - 1]) {
					ii.count *= a;
				}
				// also unite/add these counts in the group delow this grp.
				// TODO: time to change the obj structure
				// for (let ii of groups[groups.length - 2]) {
				// 	ii.name
				// }
				// valB => valBelow
				// try commenting the next block
				groups[groups.length - 1].map( (atomT) => {
					let atomAdded = false;
					groups[groups.length - 2].forEach( (atomB) => {
						if(atomT.name == atomB.name) {
							atomB.count += atomT.count;
							atomAdded = true;
						}
					})
					// the atom count has not been added because it did not exist in the previous group
					if (!atomAdded) {
						groups[groups.length - 2].push(atomT)
					}
				});
				groups.pop();
			} else {
				// find prev in grp and assign number;
				let l = groups[groups.length - 1] // last group;
				l[l.length - 1].count *= a; // last item of last group.count *= a;
			}
			prev_no = String(a);
			continue;
		}
		// if we have reached till here that means that a is not a number;
		prev_no = false;
		if (a == '[' || a == '(' || a == '{') {
			// brackets start
			// multiply number with entire grp;
			brackets.push(a);
			groups.push([]);
			continue;
		}
		let _sqr = true;
		let _round = true;
		let _curly = true;
		if (a == ']' || (_sqr = false) || a == ')' || (_round = false) || a == '}' || (_curly = false)) {
			// brackets close
			// group is ready to be evaluated in next turn
			let popped_bracket = brackets.pop();
			recentGrpClosed = true;
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
			if (_curly) {
				if (popped_bracket == '{') {
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
		// exceptions [double names atoms] eg Mg
		
		let doubles = [
			'Ac', 'Ag', 'Al', 'Am', 'Ar', 'As', 'At', 'Au', 'Ba',
			'Be', 'Bh', 'Bi', 'Bk', 'Br', 'Ca', 'Cd', 'Ce', 'Cf',
			'Cl', 'Cm', 'Co', 'Cr', 'Cs', 'Cu', 'Ds', 'Db', 'Dy',
			'Er', 'Es', 'Eu', 'Fe', 'Fm', 'Fr', 'Ga', 'Gd', 'Ge',
			'He', 'Hf', 'Hg', 'Ho', 'Hs', 'In', 'Ir', 'Kr', 'La',
			'Li', 'Lr', 'Lu', 'Md', 'Mg', 'Mn', 'Mo', 'Mt', 'Na',
			'Nb', 'Nd', 'Ne', 'Ni', 'No', 'Np', 'Os', 'Pa', 'Pb',
			'Pd', 'Pm', 'Po', 'Pr', 'Pt', 'Pu', 'Ra', 'Rb', 'Re',
			'Rf', 'Rg', 'Rh', 'Rn', 'Ru', 'Sb', 'Sc', 'Se', 'Sg',
			'Si', 'Sm', 'Sn', 'Sr', 'Ta', 'Tb', 'Tc', 'Te', 'Th',
			'Ti', 'Tl', 'Tm', 'Xe', 'Yb', 'Zn', 'Zr'
		]
		if (doubles.includes(prev_atom + a)) {
			console.log("got here")
			groups[groups.length - 1].pop();
			groups.push([{name:prev_atom + a, count:1}]);
			prev_atom = prev_atom + a
			continue
			// comehere
		}
		if (groups.length == 0) {
			groups.push([{name:a, count:1}]);
			prev_atom = a;
			continue;
		}
		// else
		groups[groups.length - 1].push({name:a, count:1});
		prev_atom = a;
	}
	// groups[groups.length - 1].map(obj => [obj.name, obj.count])
	// console.log(Object.fromEntries(groups[groups.length - 1].map(obj => [obj.name, obj.count])))
	// unfortunately the above line emits error in codewars.
	// convert array to object
	let map = groups[groups.length - 1].map(obj => [obj.name, obj.count]);
	let obj = {};
	for (let i of map) {
		const [key, val] = i;
		obj[key] = val;
	}
	return obj;
}


// var formula = 'K4[ON(SO3)2]2';
// let rslt = parseMolecules(formula); // return {K: 4, O: 14, N: 2, S: 4}

// log(rslt);

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

// getting error on glucose
let glucose = "C6H12O6";
console.log(parseMolecule(glucose))
// DONE




/*
connot parse
As2{Be4C5[BCo3(CO2)3]2}4Cu5
{[Co(NH3)4(OH)2]3Co}(SO4)3
(C5H5)Fe(CO)2CH3
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
