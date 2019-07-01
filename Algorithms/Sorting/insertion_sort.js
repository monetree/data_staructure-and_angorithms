const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// insertion sort is good when the data is almost sorted

// compare each item with first index by looping and shift to beginning if smaller
// than first index
// ----------> execution flow ----------->
//->----->best case
// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// [44, 99, 6, 2, 1, 5, 63, 87, 283, 4, 0] 
// [6, 44, 99, 2, 1, 5, 63, 87, 283, 4, 0] 
// [2, 6, 44, 99, 1, 5, 63, 87, 283, 4, 0]
// [1, 2, 6, 44, 99, 5, 63, 87, 283, 4, 0] 
//  ------------- and so on --------------
// --------->worst case
// check rest of the element and shift by comparing items from beginning
// [1, 2, 5, 6, 44, 99, 63, 87, 283, 4, 0]
// [1, 2, 5, 6, 44, 63, 99, 87, 283, 4, 0] 
// [1, 2, 5, 6, 44, 63, 87, 99, 283, 4, 0] 
//  ------------- and so on --------------


function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        if (array[i] < array[0]) {
            console.log(array[i], array[0])
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
        } else {
            console.log(array[i])
            // only sort number smaller than number on the left of it.
            //  This is the part of insertion sort that makes it fast if
            //  the array is almost sorted.
            if (array[i] < array[i-1]) {
            //find where number should go
                for (let j = 1; j < i; j++) {
                    if (array[i] >= array[j-1] && array[i] < array[j]) {
                    //move number to the right spot
                    array.splice(j,0,array.splice(i,1)[0]);
                    }
                }
            }
        }
    }
    return array;
}


console.log(insertionSort(numbers))
// [ 1, 2, 6, 44, 99, 5, 63, 87, 283, 4, 0 ]