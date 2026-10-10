class Solution {
    knapsack(W, val, wt) {
        // code here
        let n = val.length
        let grid = []
        for(let i = 0; i< n; i++) {
            grid.push(new Array(W+1));
        }
        
        for(let i = 0; i<n;i++) {
            grid[i][0] = 0
        }
        for(let i = 0; i<=W; i++) {
            grid[n-1][i] = i>=wt[n-1]?val[n-1] : 0
        }
        for(let i = n-2; i>=0; i--) {
            for(let w = 1; w<=W; w++) {
                let candidate = 0
                if(wt[i]<=w) {
                    candidate = val[i] + grid[i+1][w-wt[i]]
                }
                grid[i][w] = Math.max(grid[i+1][w], candidate)
            }
        }
        return grid[0][W]
    }
}