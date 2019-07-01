const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// find minimum and then swap
// ----------> execution flow ----------->
// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0] 
// [0, 44, 6, 2, 1, 5, 63, 87, 283, 4, 99] 
// [0, 1, 6, 2, 44, 5, 63, 87, 283, 4, 99] 


function SelectionSort(array){
    let length = array.length;
    for(let i=0; i< length; i++){
        let min = i;
        for(let j=i+1; j<length;j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        let temp = array[i];
        array[i] = array[min]
        array[min] = temp;
    }
    return array
} // O(n^2) & S(1)



console.log(SelectionSort(array))