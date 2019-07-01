
//Searching each item linerly in iterative way. 

// Binary search is also called as Sequential Search


arr = [1, 2, 4, 5, 6, 7, 9]

const LinearSearch = (num) => {
    for(let a of arr){
        if(a === num){
            return true;
        }
    }
    return false;
} //O(n)

console.log(LinearSearch(9))