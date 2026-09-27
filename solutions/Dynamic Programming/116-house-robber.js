/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    function helper(i, canRob, map) {
        if(i == nums.length) {
            return 0
        }
        if(map[i+','+canRob] != undefined) {
            return map[i+','+canRob]
        }
        let left = 0
        if(canRob) 
            left = nums[i] + helper(i+1, false, map)
        let right = helper(i+1, true, map)
        map[i+','+canRob] = Math.max(left, right)
        return map[i+','+canRob]
    }

    return helper(0, true, {})
};