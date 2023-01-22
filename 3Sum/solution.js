/**
 * @param {number[]} nums
 * @return {number[][]}
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 */
var threeSum = function(nums) {
    var result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] == 0 && nums[j] == 0 && nums[j + 1] == 0)
            {
                result.push([nums[i],nums[j],nums[j+1]]);
                return result;
            }
            var sum = nums[i] + nums[j] + nums[j + 1];
            if (sum == 0)
            {
                if(result.length == 0)
                {
                    result.push([nums[i],nums[j],nums[j+1]]);
                }else {
                    for (let k = 0; k < result.length; k++) {
                        if (!result[k].includes(nums[i]) || !result[k].includes(nums[j]) || !result[k].includes(nums[j + 1])) {
                            result.push([nums[i], nums[j], nums[j + 1]]);
                        }
                    }
                }
            }
        }
    }
    return result;
};

var nums = [-1,0,1,2,-1,-4];
var nums2 = [0,1,1];
var nums3 = [-1,0,1,0];
var nums4 = [0,0,0,0,0,0];
var nums5 = [-2,0,1,1,2]; //FIX THIS TEST CASE
console.log(threeSum(nums5));