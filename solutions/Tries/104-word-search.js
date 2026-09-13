/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    function dfs(i, j, curr, set) {
        if (curr == word.length) {
            return true
        }
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return false
        }

        if (board[i][j] != word[curr]) {
            return false
        }

        if (set.has(i + ',' + j)) {
            return false;
        }
        set.add(i + ',' + j)
        let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]

        
        for (let [rowAdd, colAdd] of dirs) {
            let nextI = i + rowAdd
            let nextJ = j + colAdd
            if (dfs(nextI, nextJ, curr + 1, set)) return true
        }
        set.delete(i + ',' + j)
        return false
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0, new Set())) return true
        }
    }
    return false
};