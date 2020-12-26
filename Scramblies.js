
//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript UNSUBMITTED 1
//harshitJoshi9152 6/7/2020 4:32 pm

function scramble(str1, str2) {
	let yes = true;
	str1 = str1.split('');
	str2.split('').forEach( (val) => {
		const index = str1.indexOf(val)
		if (index === -1) {
			yes = false;
		}
		else {
			// pop the value delete it lol
			//str1 = str1.split('')..join('');
			//str1 = str1.slice(0, index) + str1.slice(index + 1, str1.length)
			delete str1[index]
		}
	})
	return yes;
}

function scramble(str1, str2) {
	let canBeDone = true;
	str1 = str1.split('');
	for (let i of str2) {
		const index = str1.indexOf(i);
		if (index !== -1) {
			delete str1[index]
		}
		else {
			canBeDone = false;
		}
	}
	return canBeDone;
}
// still times out shit (12000 ms)


function scramble(str1, str2) {
	str1 = str1.split('');
	//for (let i of str2) {
	let acc = 0;
	let len = str2.length;
	while(len - acc) {
		i = str2[acc]
		const index = str1.indexOf(i);
		if (index !== -1) {
			delete str1[index]
		}
		else {
			return false;
		}
		++acc
	}
	return true;
}
// one more try

function scramble(str1, str2) {
	const len = str2.length
	for (let i = 0; i < len; i++) {
		const index = str1.indexOf(str2[i]);
		if (index !== -1) {
			str1 = str1.replace(str2[i], '')
			continue;
		}
		return false;
	}
	return true
}

// I GOT IT DOWN TO 62 OR 68 TESTS BUT I DID NT MAKE IT
// GUESS JAVASCRIPT IS JUST NOT FAST ENOUGH

// WAIT I GOTTA GIVE IT ONE MORE TRY !!!!
// i have to use dicts or .count
function scramble(str1, str2) {
	const len = str2.length;
	for (let i = 0; i < len; i++) {
		const char = str2[i];
		const count1 = (str1.match(`/${char}/g`) || []).length
		const count2 = (str2.match(`/${char}/g`) || []).length
		// const index = str1.indexOf(str2[i]);
		if (count1 < count2) {
			return false;
		}
	}
	return true
}

// 8:01 pm 6/8/2020
// this is gonna be my final attempt

function scramble(str1, str2) {
	// str1 -> str2
	const ctr = getObjWithProps(str1 ,0);
	
	for (let i of str1) {
		++ctr[i]
	}

	for (let i of str2) {
		if (ctr[i] && ctr[i] !== 0) {
			--ctr[i]
		} else {
			return false;
		}
	}
	return true;
}

function getObjWithProps(props, assignmentValue = []) {
	const obj = {};

	for (let i of props) {
		obj[i] = assignmentValue
	}

	return obj;
}
// THIS WORKKKKEDDDD WOWOWOOWOWWOWOWOWO!!!!! NOW I WILL SUMBIT IT

// tests



const log = console.log

log(scramble('rkqodlw','world'));
log(scramble('cedewaraaossoqqyt','codewars'));
log(scramble('katas','steak'));
log(scramble('jscripts','javascript'));
// failed

log(scramble('scriptjavx', 'javascript')); // failed because the same character cannot be used twice
log(scramble("scriptsjava", "javascripts"));