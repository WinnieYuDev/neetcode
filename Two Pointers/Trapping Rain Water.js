// Trapping Rain Water
// Hard
// Topics
// Company Tags
// Hints
// You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

// Return the maximum area of water that can be trapped between the bars.

// Example 1:



// Input: height = [0,2,0,3,1,0,1,3,2,1]

// Output: 9
// Constraints:

// 1 <= height.length <= 1000
// 0 <= height[i] <= 1000

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height.length) {
            return 0;
        }
        let n = height.length;
        let res = 0;

        for (let i = 0; i < n; i++) {
            let leftMax = height[i];
            let rightMax = height[i];

            for (let j = 0; j < i; j++) {
                leftMax = Math.max(leftMax, height[j]);
            }
            for (let j = i + 1; j < n; j++) {
                rightMax = Math.max(rightMax, height[j]);
            }

            res += Math.min(leftMax, rightMax) - height[i];
        }
        return res;
    }
}