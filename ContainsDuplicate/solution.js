/**
 * @param {number[]} nums
 * @return {boolean}
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 */

var containsDuplicate = function(nums) {

    for (var i = 0;i < nums.length;++i)
    {
        if(nums.includes(nums[i],i + 1))
        {
            return true;
        }
    }
    return false;
};

const num1 = [1,1,1,3,3,4,3,2,4,2];
const num2 = [1,2,3,4];
const num3 = [2,14,18,22,22];
const num4 = [1,2,3,1];
console.log(containsDuplicate(num3));
