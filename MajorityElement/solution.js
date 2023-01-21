/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var result = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(!result.has(nums[i]))
        {
            //result.set(nums[i],)
        }
    }
};

const nums = [3,2,3];
console.log(majorityElement(nums))