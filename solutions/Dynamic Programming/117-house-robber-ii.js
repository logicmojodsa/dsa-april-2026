/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length ==1) return nums[0]
    function helper(nums, i, canRob, map) {
        if(i == nums.length) {
            return 0
        }
        if(map[i+','+canRob] != undefined) {
            return map[i+','+canRob]
        }
        let left = 0
        if(canRob) 
            left = nums[i] + helper(nums, i+1, false, map)
        let right = helper(nums, i+1, true, map)
        map[i+','+canRob] = Math.max(left, right)
        return map[i+','+canRob]
    }

    return Math.max(helper(nums.slice(1), 0, true, {}), helper(nums.slice(0, -1), 0, true, {}))
};