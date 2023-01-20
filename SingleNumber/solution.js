/**
 * @param {number[]} nums
 * @return {number}
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
var singleNumber = function(nums) {
    let array = [];
    for(var i = 0;i < nums.length;++i)
    {
        if(array.includes(nums[i]))
        {
            array.push(nums[i]);
        }else{
            array.unshift(nums[i]);
        }
    }
    return array[0];
};

const nums = [2,2,1];
const nums2 = [4,1,2,1,2];
console.log(singleNumber(nums2))