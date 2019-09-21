function arrayManipulation(n, queries) {
  let idx = 0;
  let array = [];
  let highest;
  while (n > 0) {
    array.push(0);
    n--;
  }
  let queriesObject = {};
  debugger
  for (let i = 0; i < queries.length; i++) {
    if ((i+1) % 3 !== 0 && (i + 2) % 3 !== 0) {
      queriesObject[idx] = {
        range: [queries[i], queries[i + 1]], modifier: queries[i + 2]
      }
      idx += 1;
    }
  }

  let length = Object.keys(queriesObject).length;
  for (let i = 0; i < length; i++) {
    let start = queriesObject[i].range[0];
    let end = queriesObject[i].range[1];
    for (let j = start - 1; j <= end - 1; j++) {
      let current = array[j] += queriesObject[i].modifier;
      if (current > highest || !highest) highest = current;
    }
  }
  return highest
}
let queries = [1, 5, 3, 4, 8, 7, 6, 9, 1]; // 10
let queries2 = [1, 2, 100, 2, 5, 100, 3, 4, 100]; // 200

console.log(arrayManipulation(10, queries))
console.log(arrayManipulation(5, queries2))