/* 
Given an array of integers nums which is sorted in ascending order, and an integer target, 
write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

function test(target){
   let targetToString = string(target);
   let targetToArr = targetToString.split("");
   return targetToArr;
 }
*/
/*
function binarySearch(nums,target){
  if (nums.indexOf(target)>=0)
    return nums.indexOf(target);
  return -1;
} */

var search = function(nums, target) {
  return nums.indexOf(target)>=0 ? nums.indexOf(target) : -1
};

nums = [-1,0,3,5,9,12,50];
target = 500;

console.log(search(nums,target));