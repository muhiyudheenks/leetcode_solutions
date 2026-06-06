/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = Infinity;
    for(let num of nums){
    let sum =0;
    for(let digit of num.toString()){
        sum += Number(digit)
    }
        min= Math.min(min,sum)

    }
    return min
};