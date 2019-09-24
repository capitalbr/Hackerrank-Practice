//optimizations:
//    bottleneck: sorting the array each iteration
//    solution: removing unneccary work.  The sorting is not necessary if you
//        use a counting sort queue.  You can keep track of the head and tail 
//        as explained in solution to bottleneck 2;
//    bottleneck: shift, unshift operations each iteration
//    solution:  a counting sort queue for the trailing days and using my current
//       expenditure index and the trailing days length to index into the queue
//       to ++ and -- values at each index location to simulate pushing and 
//       popping

// At first I was timing out because I was continually sorting, shifting, and
// unshifting.

function activityNotifications(expenditure, d) {
  let notifications = 0
  let countingSort = new Array()

  // mid1 and mid2 could be the same if odd length but the calculation will
  // will not be effected: something doubled then divided by two remains itself.
  let mid1 = Math.floor((d - 1) / 2)
  let mid2 = Math.ceil((d - 1) / 2)

  // minimum and maximum expenditures as given in the problem
  for (let i = 0; i <= 200; i++) {
    countingSort[i] = 0
  }

  //trailing days
  for (let i = 0; i < d; i++) {
    countingSort[expenditure[i]]++
  }

  for (let i = d; i < expenditure.length; i++) {
    let minValue1
    let minValue2
    let median
    
    for (let j = 0, k = 0; k <= mid2; k += countingSort[j], j++) {
      if (k <= mid1) minValue1 = j;
      minValue2 = j;
    }

    median = (minValue1 + minValue2) / 2


    if (expenditure[i] >= median * 2) notifications++


    countingSort[expenditure[i - d]]-- //pop
    countingSort[expenditure[i]]++  //push
  }
  return notifications;
}

console.log(activityNotifications([1, 1, 4, 1, 1, 5, 1, 1, 5, 1, 1, 5], 5))


