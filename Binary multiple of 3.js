//https://www.codewars.com/kata/54de279df565808f8b00126a/train/javascript
//HarshitJoshi9152 10:05 pm 6/8/2020
// so i looked up solutions online like https://repl.it/@Mahafutu786/binary-multiple-of-3-in-regex#main.js
// and there is no way i could have come up with something even close to this.

const log = console.log

let num = 1
while (num <= 100) {
	if (num % 3 == 0) {
		log((num).toString(2));
	}
	++num
}

// this non functioning Logger is a problem for another day
function Logger(charLimit) {
	this.widthCache = 0 // horizontal termial width acc
	this.widthLimit = charLimit // horizontal termial width limit
	this.log = function (str) {
		if (this.widthCache + str.length > this.widthLimit) {
			process.stdout.write('\n', this.widthCache + str.length)
			this.widthCache = 0;
			console.log(charLimit)
		}
		console.log(this.widthCache, str.length, this.widthLimit)
		console.log(this.widthCache + str.length > this.widthLimit)
		this.widthCache += str.length;
		process.stdout.write(str)
		// if ()
	}
}