/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ln = nums.length;
    for(let i = 0; i<ln; i++){
        nums.push(nums[i])
    }
    return nums
};