/**
 * @param {number[]} nums
 * @return {number}
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
var singleNumber = function(nums) {
    if(nums.length == 1) return nums[0];
    for(var i = 0;i < nums.length;++i)
    {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i]))
        {
            return nums[i];
        }
    }
};
const nums = [2,2,1];
const nums2 = [4,1,2,1,2];
console.log(singleNumber(nums))