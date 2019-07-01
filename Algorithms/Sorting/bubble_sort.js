const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// check with each items one by one and swap if small
// ----------> execution flow ----------->
// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0] 
// [44, 99, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// [44, 6, 99, 2, 1, 5, 63, 87, 283, 4, 0]
// [44, 6, 2, 99, 1, 5, 63, 87, 283, 4, 0]
// [44, 6, 2, 1, 99, 5, 63, 87, 283, 4, 0]
// [44, 6, 2, 1, 5, 99, 63, 87, 283, 4, 0]
// [44, 6, 2, 1, 5, 63, 99, 87, 283, 4, 0]
// [44, 6, 2, 1, 5, 63, 87, 99, 283, 4, 0]
// [44, 6, 2, 1, 5, 63, 87, 99, 4, 283, 0]
// [44, 6, 2, 1, 5, 63, 87, 99, 4, 0, 283]

function BubbleSort(array){
    const length = array.length;
    // for (let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            if(array[j] > array[j+1]){
                //swap numbers
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    // }
    return array;
} // O(n^2) & S(1)



console.log(BubbleSort(array))