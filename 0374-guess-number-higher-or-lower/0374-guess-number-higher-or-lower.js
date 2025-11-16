/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1, high = n;

    while (true) {
        let mid = (low + high) >>> 1;

        let res = guess(mid);
        if (res === 0) return mid;
        if (res < 0) high = mid - 1;
        else low = mid + 1;
    }
};
