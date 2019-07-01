// given a number N return the index value of the Fibonacci sequence,
// where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21


function fibonacciIterative(num){ // O(n)
    let arr = [0, 1]
    for(let i=2; i < num + 1; i++){
        arr.push(arr[i-1] + arr[i-2])   
    }
    return arr[num];
}


function fibonacciRecursive(num){ //O(2^n)
    if(num < 2){
        return num;
    } 
    return fibonacciRecursive(num-1) + fibonacciRecursive(num-2);
}












console.log(fibonacciIterative(8))