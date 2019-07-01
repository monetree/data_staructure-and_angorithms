// given two arrays, Create a function that let's user
//  know (true/false) wheather two arrays contains any common items

// for example:
// const array1 = ['a','b','c','x']
// const array1 = ['z','y','i']
// should return false
//--------------
// const array1 = ['a','b','c','x']
// const array1 = ['z','y','x']
// should return true

const checkCommonItem = (arr1, arr2) => {
    for(i=0; i<arr1.length; i++){
        for(j=0; j<arr2.length; j++){
            if (arr1[i] === arr2[j]){
                return true
            }
        }
    }
    return false
} // O(m*n)


const checkCommonItem2 = (arr1, arr2) => {
    let map = {};
    for (i=0; i<arr1.length; i++){
        map[arr1[i]] = true
    }
    
    for (j=0; j<arr2.length; j++){
        if (map[arr2[j]]){
            return true
        }
    }
    return false
} // O(m+n)

console.log(checkCommonItem2(['a','b','c','x'], ['z','y','x']))