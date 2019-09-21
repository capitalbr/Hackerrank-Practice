// Complete the sherlockAndAnagrams function below.
// How many subarrays of input 's' are anagrams of one another?

// QUESTION FOUND HERE
// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function pairsCount(subs, key) {
  let count = 0;
  for (let i = subs[key] - 1; i > 0; i--) {
    count += i;
  }
  return count;
}
function sherlockAndAnagrams(s) {
  let counter = 0;
  let subs = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let sub = s.slice(i, j + 1);
      if (sub.length < s.length) {
        let subSorted = sub.split("").sort().join("");
        if (!subs[subSorted]) subs[subSorted] = 0;
        subs[subSorted] += 1;
      }
    }
  }

  let subKeys = Object.keys(subs);
  subKeys.forEach(key => {
    counter += pairsCount(subs, key);
  })

  return counter;
}
console.log(sherlockAndAnagrams("abba"));
console.log(sherlockAndAnagrams("abcd"));
console.log(sherlockAndAnagrams("ifailuhkqq"));
console.log(sherlockAndAnagrams("kkkk"));
console.log(sherlockAndAnagrams("cdcd"));
