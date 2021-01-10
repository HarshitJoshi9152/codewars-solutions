// HarshitJoshi9152 https://github.com/HarshitJoshi9152
// Sunday, January 10, 2021 at 9:44:53 PM GMT+5:30 
// javascript 

// Sum Strings as Numbers https://www.codewars.com/kata/5324945e2ece5e1f32000370 
// category: algorithms 
// rank: 4 kyu 

/*
Given the string representations of two integers, return the string
representation of the sum of those integers.

For example:
javascript
sumStrings('1','2') // => '3'


A string representation of an integer will contain no characters besides the
ten numerals "0" to "9". 
*/

function sumStrings(a,b) { 
  console.log(a,b);
  const toloop = (a.length > b.length) ? a : b;
  let toPadd = (a.length > b.length) ? b : a;
  toPadd = toPadd.padStart(toloop.length, "0");
  console.log(toloop,'\n', toPadd);
  let totalSum = "";
  let carry = 0;
  for (let i = toloop.length - 1; i >= 0; i--) {
    const [dig1, dig2] = [Number(toloop[i]), Number(toPadd[i])];
    let sum = String(dig1 + dig2 + carry);
    carry = (sum.length > 1) ? Number(sum[0]) : 0;
    console.log(dig1, dig2, 'sum =', sum, 'carry=', carry);
    if (carry) {
      sum = sum[1]
    }
    totalSum = sum + totalSum;
    console.log(totalSum)
  }
  if (carry) {
    totalSum = String(carry) + totalSum;
  }
  while(totalSum[0] == '0') {
    totalSum = totalSum.slice(1)
  }
  console.log('\n\n',totalSum)
  return totalSum;
}
