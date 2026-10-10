var longestCommonSubsequence = function(text1, text2) {
    function helper(i, j, dp = {}) {
        if(dp[i+','+j] != undefined) {
            return dp[i+','+j]
        }
        if(i==text1.length || j==text2.length) {
            return 0
        }
        if(text1[i] == text2[j]) {
            dp[i+','+j] =  1+helper(i+1,j+1,dp)
        } else {
            dp[i+','+j] = Math.max(helper(i+1,j,dp), helper(i,j+1,dp));
        }
        return dp[i+','+j]
    }

    return helper(0,0)
};