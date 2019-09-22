function minimumSwaps(arr) {
  let swaps = 0;
  let sorted;
  while (!sorted){
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i + 1) {
        sorted = false;
        [arr[arr[i]-1], arr[i]] = [arr[i], arr[arr[i]-1]];
        swaps += 1;
      }
    }
  }
  return swaps;
}

console.log(minimumSwaps([4, 3, 1, 2]));