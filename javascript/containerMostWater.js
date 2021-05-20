/*
URL: https://leetcode.com/problems/container-with-most-water/
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Ex
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Input: height = [1,1]
Output: 1

Input: height = [4,3,2,1,4]
Output: 16

Input: height = [1,2,1]
Output: 2
*/

const maxArea = (height) => {
  let i = 0
      j = height.length - 1;
      max = 0

  while (i < j) {
    let minH = height[i] < height[j] ? height[i] : height[j]
    let area = minH * (j - i);
    if (area > max) {max = area};

    height[i] > height[j] ? j-- : i++

  }
  return max;
}

/* 
Score
Runtime: 76ms, faster than 99.52%
Memory Usage: 48.3mb, less than 18.09%
*/