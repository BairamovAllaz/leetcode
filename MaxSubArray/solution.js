/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let maxNumber = -10000;
    for (const num of nums) {
        sum += num;
        if (sum > maxNumber) {
            maxNumber = sum;
        }
        if (sum < 0)
        {
            sum = 0;
        }
    }
    return maxNumber;
};


var nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums))