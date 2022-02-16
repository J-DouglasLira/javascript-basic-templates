/* 
Given an array of integers nums which is sorted in ascending order, and an integer target,
 write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Constraints:
    1 <= nums.length <= 104
    -104 < nums[i], target < 104
    All the integers in nums are unique.
    nums is sorted in ascending order.
*/ 




var search = function(nums, target) {
  if (nums.indexOf(target)>=0)
      return nums.indexOf(target);
  return -1;
};

target = 9;
nums = [-1,0,3,5,9,12];


console.log(search(nums,target));

