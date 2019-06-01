// mergeSortedArrays([0,3,4,31],[4,6,30])
//[0,3,4,31,4,6,30]


const mergeSortedArrays1 = (arr1, arr2) => {
    if (arr1.length === 0)
        return arr2.sort(function(a, b){return a-b})
    if (arr2.length === 0)
        return arr1.sort(function(a, b){return a-b})

    for (let a2 of arr2) {
        arr1.push(a2);
    }
    return arr1.sort(function(a, b){return a-b})
}

const arraySorter = (arr) => {
    let firstIndex = arr[0]
    const sortedArray = []
    for (let i = 0; i < arr.length; i++){
        if (firstIndex < arr[i]){
            sortedArray.push(arr[i])
        } 
    }

    return sortedArray
}

console.log(arraySorter([4,6,30,67,9,7]))


const mergeSortedArrays2 = (arr1, arr2) => {
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    if (arr1.length === 0)
        return arr2.sort(function(a, b){return a-b})
    if (arr2.length === 0)
        return arr1.sort(function(a, b){return a-b})
    
    while (array1Item || array2Item) {
        console.log(array1Item, array2Item)
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(array2Item)
            array2Item = arr2[j];
            j++;
        }
    }
    return mergedArray
}



// console.log(mergeSortedArrays1([0,3,4,31], [4,6,30,67,9]))
// console.log(mergeSortedArrays2([0,3,4,31], [4,6,30,67,9,7]))


