
//optimizations:  
// 1) Avoided Duplicate Work: keep track of index to pick up where you left off
// 2) Removed Unnecessary Work:  removed duplicate entries from input;
// *3*) Removed bottleneck:  Replaced Array.prototype.filter with a Set;

function climbingLeaderboard(scores, alice) {
  let positions = [];

  // create unique scores array because the duplicate information is in the way
  // all we care about is what place a certain score will put you in
  let uniqueScores = [...new Set(scores)];

  // keeping track of the index will allow us to pick up where we left off with
  // each new score from alice because we already know the scores are of higher
  // rank than the ones before it since her scores are ordered from smallest
  // too largest
  let i = uniqueScores.length - 1;
  alice.forEach(element => {

    while (i >= 0) {
      if (element >= uniqueScores[i]) {
        i--;
      } else {
        // once alices score is less than the current score 'uniqueScores[i]'
        // we know her rank for this score is one spot lower than the current
        // score.  Since scores are not zero indexed like 'i' is we need to
        // add 1 to make it 1 indexed and add another to make her rank be 1 spot
        // lower than her competitor.
        positions.push(i + 2);
        break;
      }
    }
    // we made it through the entire list of scores and still have the highest 
    // score so this one is the number 1 ranked score!
    if (i < 0) positions.push(1);

  });

  return positions;
}
console.log(climbingLeaderboard([100, 90, 30, 10], [20, 30, 30, 30, 44, 44, 55, 266]));