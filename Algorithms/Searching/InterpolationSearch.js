//better than binary search it will give near index of searched item.
// when the data will be definitely exist then this will be good.
// when data is not there then this is not good because it will go over all 
// elements to check if data is not there that case binary search will be good

// time complexity
// best case O(1)
// average case  O(log log n))
//worst case O(n)

//space complexity always O(1)

//use if you sure item will be there.

    //[0, 1, 2, 3, 4, 5,  6,  7]
arr = [1, 3, 4, 5, 9, 11, 13, 15]

const InterpolationSearch = (arr, num) => {
    const length = arr.length;
    let starting_index = 0;
    let ending_index = length - 1;
    for(let i=0; i < length; i++){
        let pos = starting_index + (
            (ending_index - starting_index) /
            (arr[ending_index] - arr[starting_index]) 
            * (num - arr[starting_index]) 
        ) 
       let index = Math.floor(pos)
       if (num === arr[index]) return true
       else starting_index = index + 1
    }
    return false;
}

console.log(InterpolationSearch(arr, 9))