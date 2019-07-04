

//[0, 1, 2, 3, 4, 5,  6,  7]
arr = [1, 3, 4, 5, 9, 11, 13, 15]


const exponentialSearch = (arr, num) => {
    if(arr[0] === num){
        return true
    }
    let i = 1;
    while(true){
        if(arr[i] == num){
            return true
        }
        if(arr[i] > num){
            console.log(i)
            console.log(arr[i], num)
            return true
        } else {
            i = i*2;
        }
    }
}

console.log(exponentialSearch(arr, 11))