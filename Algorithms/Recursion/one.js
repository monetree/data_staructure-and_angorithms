// write two functions that finds factorial of any number.
// One Should use recursive, the other should use just for loop.
// if input is 5:
// it should return 5*4*3*2*1 = 80

function findFactorialRecursive(n){
    if (n === 2 || n === 1){
        return n;
    }
    // 5 * 4!
    // 20 * 3!
    // 60 * 2!
    
    //5 * findFactorialRecursive
    //     (4 * findFactorialRecursive
    //     (3 * findFactorialRecursive
    //     (2 * findFactorialRecursive(1))))
    return n * findFactorialRecursive(n-1);
}

function FindFactorialIterative(n){
    if (n === 2 || n === 1){
        return n;
    }
    let answer = 1;
    for(let i=n; i >=2; i--){
        answer = answer * i
    }
    return answer;
}

console.log(FindFactorialIterative(5))
