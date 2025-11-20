/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let words = (s1 + " " + s2).split(" ");
    let map = {};

    for (let w of words) {
        map[w] = (map[w] || 0) + 1;
    }

    return Object.keys(map).filter(w => map[w] === 1);
};
