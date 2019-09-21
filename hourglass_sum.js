function hourglassSum(arr) {
  let sum;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let windowTop = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      let windowMid = arr[i + 1][j + 1];
      let windowBottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      let windowSum = windowTop + windowMid + windowBottom;
      if (typeof sum !== "number") sum = windowSum;
      if (sum < windowSum) sum = windowSum;
    }
  }
  return sum;
}

let arr = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
];

arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

arr = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
]


console.log(hourglassSum(arr));

