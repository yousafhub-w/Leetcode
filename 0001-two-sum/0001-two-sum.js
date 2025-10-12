var twoSum = function(nums, target) {
  const map = new Map(); // store number -> index

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i]; // found the pair
    }

    map.set(nums[i], i); // store current number and index
  }
};
