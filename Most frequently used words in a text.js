//https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
//HarshitJoshi9152 10:01 PM 10/23/2020
//

function topThreeWords(text) {
	let words = text.trim().split(" ");
	let maxFreq = 0;
	let wordsFound = [];
	for (let word of words) {
		if (word in wordsFound) {
			if (wordsFound[wordsFound.indexOf(word) + 1]) {
				wordsFound[wordsFound.indexOf(word) + 1]++;
				if ( wordsFound[wordsFound.indexOf(word)] > maxFreq ) {
					maxFreq = wordsFound[wordsFound.indexOf(word)];
				}
			} else {
				wordsFound[wordsFound.indexOf(word) + 1] = 1;
			}
		}
		else {
			wordsFound.push(word);
		}
	}
	console.log(maxFreq)
	for (let i = 1; i < wordsFound.length; i += 2) {
		let count = wordsFound[i];
		if (count == maxFreq) {
			return wordsFound[i - 1];
		}
	}
}

// bad solution to much time BAD O

function topThreeWords(text) {
	const words = text.split(" ");
	// how to get word count -> text.match(word).length;
	// to remove duplicates and convert to array [...new Set(scoredWords)]
	// REMOVING ARRAY DUPLICATES DOESNT WORK WITH SET || MATCH NOT ENOUGH FIND REGEXP META CHAR TO REPRESENT WHITESPACE CHARACTER. DONE
	// result | count | score with just \\s + word + \\s will STILL BE WRONG. no consideration for first and last word in the sentence. DONE
	// add insensitivity support too. DONE
	// add COMMA SUPPORT 
	let scoredWords = [ ...new Set(words.map( word => [word, text.match(new RegExp(`(^(${word})\\s|(\\s(${word})\\s)|\\s(${word}).?$)`,"gi")).filter(Boolean).length] )) ];
	scoredWords = scoredWords.map( (elm) => elm.toString() ).filter( (elm, index, list) => list.indexOf(elm) == index ).map(convertFromStringToDataArray);

	scoredWords.sort( (a,b) => b[1] - a[1] );
	console.log(scoredWords);
	let [first, second, third, ...greatest] = scoredWords; // or use .slice(0, 3);
	console.log(first, second, third)
}

function convertFromStringToDataArray( str ) {
	const a = str.split(",");
	a[1] = Number(a[1]);
	return a;
}

let sentence = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
sentence = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
console.log(topThreeWords(sentence))
// in a  for in loop iterator variable is always string.
// comparing and equating (finding equal) arrays and objects.
//
//$(in) \s(In)\s
// /(^(in)\s|(\s(In)\s)|\s(in).?$)/gi
// new RegExp(`(^(${word})\\s|(\\s(${word})\\s)|\\s(${word}).?$)`,"gi");
