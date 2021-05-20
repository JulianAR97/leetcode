/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Ex:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
*/


const twoSum = function(nums, target) {
  let seen = {}
  let j = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let pair = target - num;
    if (typeof seen[pair] === 'number') {
      return [seen[pair], i]
    } else {
      seen[num] = i
    }
  }
}

/* 
Score
Runtime: 80ms, faster than 56.53
Memory Usage: 39.5, less than 12.99%
*/