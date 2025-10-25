var totalMoney = function(n) {
  let total = 0;
  let start = 1;

  for (let i = 0; i < n; i += 7) { 
    for (let j = 0; j < Math.min(7, n - i); j++) { 
      total += start + j;
    }
    start++;
  }

  return total;
};