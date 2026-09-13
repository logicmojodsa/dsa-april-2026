class Node {
    next = []
    isWord = false
}


class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root;

        for (let letter of word) {
            let letterIndex = letter.charCodeAt() - 'a'.charCodeAt()
            if (!curr[letterIndex]) {
                curr[letterIndex] = new Node()
            }
            curr = curr[letterIndex]
        }
        curr.isWord = true
    };

    search(word) {
        let curr = this.root;

        for (let letter of word) {
            let letterIndex = letter.charCodeAt() - 'a'.charCodeAt()
            if (!curr[letterIndex]) {
                return false
            }
            curr = curr[letterIndex]
        }
        return curr.isWord == true
    };

    startsWith(prefix) {
        let curr = this.root;

        for (let letter of prefix) {
            let letterIndex = letter.charCodeAt() - 'a'.charCodeAt()
            if (!curr[letterIndex]) {
                return false
            }
            curr = curr[letterIndex]
        }
        return true
    };

}

