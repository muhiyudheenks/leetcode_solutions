/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let digits = n.toString().split('');
    let sum =0;
    for(let digit of digits){
        sum+= Number(digit)
    }
return sum
};