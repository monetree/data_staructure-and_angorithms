//Good when list is sorted
//break items 4 into 4 parts then
// search linearly by going left and right.


arr = [ 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ] 

const JumpSearch = (arr, num) => {
    const length = arr.length;
    const eachBlock = Math.floor(length/4);
    let index    = 0;
    while(index < length){
        let temp    = arr[index];
        if(num < temp){
            //search left
            index = index - 1;
        } else if(num === temp) {
            //matched return this
            return true
        } else {
            // jump eachBlock  
            index = index + eachBlock;
        }
    }
    return false;

} // O(√4)

console.log(JumpSearch(arr, 14))


