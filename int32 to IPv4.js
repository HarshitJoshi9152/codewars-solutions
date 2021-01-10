function int32ToIp(int32){
  //...
  console.log(int32)
  let maxVals = [0b0000000000001111,
                 0b0000000011110000,
                 0b0000111100000000,
                 0b1111000000000000];
  let bin = int32.toString(2);
//   let [oct1, oct2, oct3, oct4] = bin.splice()
  let prev_i = 0;
  return [...bin].reduce( (acc, val, i) => {
    if (i % 8 == 0) {
      let val = bin.slice(prev_i, i)
      prev_i = i;
      acc += parseInt(val, 2); 
    }
  }, 0)
  
}


2149583361

function int32ToIp(int32){
  //...
  console.log(int32)
  let maxVals = [0b0000000000001111,
                 0b0000000011110000,
                 0b0000111100000000,
                 0b1111000000000000];
  let bin = int32.toString(2);
//   let [oct1, oct2, oct3, oct4] = bin.splice()
  let prev_i = 0;
  return [...bin].reduce( (acc, v, i) => {
    if (i % 8 == 0) {
      let val = bin.slice(prev_i, i);
      console.log(val);
      prev_i = i;
      acc += parseInt(val, 2);
    }
    return acc;
  }, 0)

}











function int32ToIp(int32){
  //...
  console.log(int32)
  let maxVals = [0b0000000000001111,
                 0b0000000011110000,
                 0b0000111100000000,
                 0b1111000000000000];
  let bin = int32.toString(2);
//   let [oct1, oct2, oct3, oct4] = bin.splice()
  let prev_i = 0;
//   return [...bin].reduce( (acc, v, i) => {
//     if (i % 8 == 0) {
//       let val = bin.slice(prev_i, i);
//       console.log(val);
//       prev_i = i;
//       acc += parseInt(val, 2);
//     }
//     return acc;
//   }, 0)
  let app = ""
  console.log([bin.slice(0, 8), bin.slice(8,16), bin.slice(16, 24), bin.slice(24, 32)])
  for (let i of [bin.slice(0, 8), bin.slice(8,16), bin.slice(16, 24), bin.slice(24, 32)]) {
    app += parseInt(i, 2) + '.'
  }
  return app.slice(0, app.length - 1)
}
