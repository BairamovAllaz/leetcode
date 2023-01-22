/**
 * @param {number[]} nums
 * @return {number}
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */
var majorityElement = function(nums) {
    const  expectedResult = Math.round(nums.length / 2);
    for (var i=0;i < nums.length;++i)
    {
        var count = 0;
        for(var j = 0;j < nums.length;++j)
        {
            if(nums[i] == nums[j])
            {
                count++;
            }
        }
        if(count == expectedResult)
        {
            return nums[i];
        }
    }
};

const nums = [3,2,3];
const nums2 = [2,2,1,1,1,2,2];
console.log(majorityElement(nums2))