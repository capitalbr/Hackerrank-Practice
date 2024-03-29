function getMinimumCost(k, c) {
  let costFactor = 1;
  let total = 0;
  // give a callback to Array.prototype.sort or it will sort by dictionary order
  let prices = c.sort((a, b) => a - b);
  for (let i = prices.length - 1, j = k; i >= 0; i-- , j--) {
    if (j === 0) {
      costFactor += 1;
      j = k;
    }
    total += prices[i] * costFactor;
  }

  return total;
}

let k = 3;
let c = [
  390225, 
  426456, 
  688267, 
  800389, 
  990107, 
  439248, 
  240638, 
  15991, 
  874479, 
  568754, 
  729927, 
  980985, 
  132244, 
  488186, 
  5037, 
  721765, 
  251885, 
  28458, 
  23710, 
  281490, 
  30935, 
  897665, 
  768945,
  337228, 
  533277, 
  959855,
  927447, 
  941485, 
  24242,
  684459, 
  312855, 
  716170, 
  512600, 
  608266, 
  779912, 
  950103, 
  211756, 
  665028,
  642996, 
  262173, 
  789020, 
  932421, 
  390745, 
  433434, 
  350262, 
  463568,
  668809,  
  305781, 
  815771,
  550800
]

console.log(getMinimumCost(k, c));