function buildLps(pattern) {
    let len = pattern.length
    let lps = new Array(len)

    lps[0] = 0
    let i = 1
    let j = 0
    
    while(i<len) {
        if(pattern[i]==pattern[j]) {
            lps[i] = j+1
            i++
            j++;
        } else if(j>0) {
            j = lps[j-1]

        } else {
            lps[i] = 0
            i++;
            
        }


    }

    return lps

}

function kmp(text, pattern) {
    let lps = buildLps(pattern)

    let i = 0, j = 0

    while(i<text.length) {
        if(text[i] == pattern[j]) {
            i++;
            j++;
            if(j == pattern.length) {
                return 'found'
            }
        } else if(j>0) {
            j = lps[j-1]
        } else {
            i++;
        }
    }
}


kmp('ABABDABACDABABCABAB', 'ABABCABAB')