/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    result = []
    for(i=0;i<n;i++){
        result.push(nums[i]);
        result.push(nums[i+n])
    }
    return result
}