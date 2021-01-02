//https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
//HarshitJoshi9152 11:59 pm 1/2/2021
function rot13(str) {
  const set = "abcdefghijklmnopqrstuvwxyz";
  const set2 = set.toUpperCase();
  
  let newstring = "";
  for (let char of str) {
    let n = "";
    if (!set.includes(char) && !set2.includes(char)) {
      newstring += char;
      continue;
    }
    if (char == char.toLowerCase()) {
      let j = set.indexOf(char);
      n = set[(j + 13) % 26]
    } else {
      // upper
      let j = set2.indexOf(char);
      n = set2[(j + 13) % 26]
    }
    newstring += n;
  }
  return newstring;
}
