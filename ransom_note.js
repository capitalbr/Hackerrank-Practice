function checkMagazine(magazine, note) {
  let magObj = {};
  let isPossible = true;

  // store magazine words in an Object to count number of occurrences
  // which automatically handles case sensitivity.
  magazine.forEach(word => {
    if (!magObj[word]) magObj[word] = 0;
    magObj[word] += 1;
  })

  // if a word isn't in the magObj (or it's count is zero) the it's not possible
  // to make the ransom note;
  note.forEach(word => {
    if (!magObj[word]) isPossible = false;
    magObj[word] -= 1;
    return;
  });

  isPossible ? console.log("Yes") : console.log("No");
}

console.log(checkMagazine(
    ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"],
    ["ive", "got", "some", "coconuts"]
    ))

console.log(checkMagazine(
  ["ive", "got", "a", "lovely", "bunch", "of", "coconuts", "some"],
  ["ive", "got", "some", "coconuts"]
))

console.log(checkMagazine(
  ["ive", "got", "a", "lovely", "bunch", "of", "coconuts", "some"],
  ["ive", "got", "Some", "coconuts"]
))

    