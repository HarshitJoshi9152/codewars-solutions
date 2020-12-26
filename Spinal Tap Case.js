function spinalCase(str) {
  // console.log(str);
  // !wait we dont need flag we could just check if the previous char was a sep and if it was replaced with -.
  // todo even better just use the .charCode mappings.
  let template = "";
  const newSep = "-";
  let sepEscapeFlag = false; 
  // for when we dont have to add sep to result. eg in "The_Andy_Griffith_Show
  for (let letterIndex in str){
    const letter = str[letterIndex];
    const prevSepIndex = [" ","_",letter.toUpperCase()].indexOf(letter);
    if (letterIndex == 6)
      debugger;
    

    if (prevSepIndex == -1) {
      template += letter;
      continue;
    }
    switch(prevSepIndex){
      case 0:
        template += newSep;
        sepEscapeFlag = true;
        // console.log(letterIndex)
        continue;
      case 1:
        template += newSep;
        sepEscapeFlag = true;
        // console.log(letterIndex)
        continue;
      case 2:
        if (letterIndex == 0 || sepEscapeFlag){
          template += letter.toLowerCase();
          continue;
        }
        template += newSep + letter.toLowerCase();
        continue;
    }
    sepEscapeFlag = false
  }
  console.log(template, "@^")
  return template;
}

spinalCaseRewrite('This Is Spinal Tap');


function spinalCaseRewrite(str) {
  `This def converts any style of indentifier to - separated`
  const sep = "-";
  const unnamedFlag = false;
  const result = "";

  const separators = ["_"," "]

  for (let i in str) {
    const val = str[i];
    const code = str.charCodeAt(i);

    if (num >= 65  && sum <= 65 + 26){
      `The Char is in the lowercase letters range`
      result += val;
    }
    else if (num >= 97 && sum <= 97 + 26){
      if (separators.includes(str[i - 1]))
        result += val;
      else {
        result += sep + val.toLowerCase();
      }
    }
  }
  return result;
}