
/*
The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

We will write a function gap with parameters:

g (integer >= 2) which indicates the gap we are looking for

m (integer > 2) which gives the start of the search (m inclusive)

n (integer >= m) which gives the end of the search (n inclusive)

In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise nil or null or None or Nothing (depending on the language).
*/

//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/javascript
//HarshitJoshi9152 5:03 pm 6/7/2020

// non working function
function gap(g, m, n) {
	const pairs = [];
	m = (m % 2 == 0) ? ++m : m ;
	for (m; m <= n; m += 2) { //because no even number is prime
		// check if a no is prime
		// if it is add gap to it and check if the resulting number is prime and in the range.
		if (isPrime(m)) {
			gap_pair = m + g;
			pairs.push([m, gap_pair])
		}
	}
	return (!pairs.length) ? null:pairs[0];
}


// code not fast enough huh...
//
// Well it is now PERFECT :::::::
function gap(g, m, n) {
	let i = m;
	let primeHolder = null;
	for (i; i < n; ++i) {
		if (isPrime(i)){
			if (primeHolder) {
				let diff = i - primeHolder;
				if (diff == g) {
					//primes.push([primeHolder, i]);
					return [primeHolder, i]
				}
			}
			primeHolder = i;
		}
	}
	return null
}

function isPrime(num) {
	if (num <= 3) return true;
	for (let i=2; i < Math.floor(Math.sqrt(num)) + 1; ++i ) {
		if (num % i == 0) return false
	}
	return true
}

// tests
const log = console.log
log(gap(2, 3, 50))
log(gap(8, 300, 400))
log(gap(10, 300, 400))
