class Solution:
    def minPathSum(self, grid: list[list[int]]) -> int:

        directions = [(0,1),(1,0)]

        ROWS = len(grid)
        COLS = len(grid[0])

        target = (ROWS-1,COLS-1)

        # @cache
        # def dfs(r,c):
        #     if (r,c) == target:
        #         return grid[r][c]



        #     best_score = float('inf')

        #     for dr,dc in directions:
        #         nr = r + dr
        #         nc = c + dc

        #         if 0<=nr<ROWS and 0<=nc<COLS:
        #             best_score = min(best_score,dfs(nr,nc))

        #     return grid[r][c] + best_score
        # return dfs(0,0)

        dp = [[0]*COLS for _ in range(ROWS)]

        dp[ROWS-1][COLS-1] = grid[ROWS-1][COLS-1]

        for r in range(ROWS-1,-1,-1):
            for c in range(COLS-1,-1,-1):
                if (r,c) == target:
                    continue

                best_score = float('inf')
                for dr,dc in directions:
                    nr = r + dr
                    nc = c + dc

                    if 0<=nr<ROWS and 0<=nc<COLS:
                        best_score = min(best_score,dp[nr][nc])

                dp[r][c] = grid[r][c] + best_score
        return dp[0][0]