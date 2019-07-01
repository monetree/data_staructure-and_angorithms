//Good when the data is sorted. search by divide and conqure
// by cheking middle item with right and left item 

// Binary search is also called as Interval Search

arr = [ 2, 3, 4, 10, 40, 88, 998 ] 

//Iterative way
const BinarySearchIterative = (num, arr) => {
    while(true){
        const middle = Math.floor(arr.length/2)
        let length = arr.length;
        if(length === 1){ // best case
            if(arr[0] === num){
                return true
            } else {
                return false
            }
        }
        if(arr[middle] < num){
            //on right side - remove left part
            arr.splice(0, middle)
        } else if(arr[middle] > num) {
            // on left side - remove right part
            arr.splice(middle, length-1)
        } else {
            //matched - return this
            return true
        }
    }
} // O(n/2)



//Recursive way
const BinarySearchRecursive = (num, arr) => {
    const middle = Math.floor(arr.length/2)
    let length = arr.length;
    if(length === 1){ // best case
        if(arr[0] === num){
            return true
        } else {
            return false
        }
    }
    if(arr[middle] < num){
        //on right side - remove left part
        arr.splice(0, middle)
        return BinarySearchRecursive(num, arr)
    } else if(arr[middle] > num) {
        // on left side - remove right part
        arr.splice(middle, length-1)
        return BinarySearchRecursive(num, arr)
    } else {
        //matched - return this
        return true
    }
}

console.log(BinarySearchRecursive(5, arr))