//Good when list is sorted
//break items 4 into 4 parts then
// search linearly by going left and right.


const JumpSearch = (arr, num) => {
    const length = arr.length;
    const eachBlock = Math.floor(length/4);
    let found_big = false
    let index    = 0;
    while(index < length){
        let temp    = arr[index];
        if(num < temp){
            //search left
            found_big=true
            index = index - 1;
        } else if(num === temp) {
            //matched return this
            return true
        }else if((num > temp) && (found_big === true)) {
            return false;
        } else {
            // jump eachBlock  
            index = index + eachBlock;
        }
    }
    return false;

} //O(n/4)

console.log(JumpSearch(arr, 14))


