var commonChars = function(words) {
  let res = words[0].split(''); // take first word as base
  for (let i = 1; i < words.length; i++) {
    const temp = words[i].split('');
    res = res.filter(ch => {
      const idx = temp.indexOf(ch);
      if (idx !== -1) {
        temp.splice(idx, 1); // remove once (handles duplicates)
        return true;
      }
      return false;
    });
  }
  return res;
};
