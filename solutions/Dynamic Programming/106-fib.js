function fibRecursion(n) {
    if(n == 0 || n == 1) 
        return n

    return fib(n-1, map) + fib(n-2, map)
}

function fibRecursionWithMemo(n, map={}) {
    if(n == 0 || n == 1) 
        return n
    if(map[n]!=undefined) {
        return map[n]
    }
    map[n] = fib(n-1, map) + fib(n-2, map)
    return map[n]

}

function fibTabulation(n) {
    let arr = new Array(n+1)

    arr[0] = 0
    arr[1]= 1

    for(let i = 2; i<=n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
        
    }
    return arr[n]
}

function fibTabulationWithSpaceOptimised(n) {
    
    let first = 0
    let second = 1
    let third;

    for(let i = 2; i<=n; i++) {
        third = first + second
        first = second
        second = third
    }
    return third
}




