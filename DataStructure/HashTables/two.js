// google question - Return First Recurring Character
// given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2

// given an array = [2,1,1,2,3,5,1,2,4]
// it should return 1

// given an array = [2,3,4,5]
// it should return undefined

const firstRecurringChar = (arr) => {
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i] === arr[j]){
                return arr[i]
            }
        }
    }
    return undefined
} // O(n^2)

const firstRecurringChar2 = (arr) => {
    let map = {};
    for (let i=0; i < arr.length; i++){
        if (map[arr[i]]){
            return arr[i]
        } else {
            map[arr[i]] = i
        }
    }
    return undefined
} //O(n)

console.log(firstRecurringChar([2,5,5,2,3,5,1,2,4]))
// console.log(firstRecurringChar2([10,5,1,2,3,5,1,2,4]))
