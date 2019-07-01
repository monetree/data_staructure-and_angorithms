//reverse a string

// My Name Is Andrei
// should be
// ierdnA sI emaN ym


function reverse(str){
    if (!str || str.length < 2 || typeof str !== 'string'){
        return str;
    }
    let backward = []
    for (i=str.length-1; i >= 0; i--){
        backward.push(str[i])
    }
    return backward.join('')
} // O(n)

function reverse2(str){
    return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');

console.log(reverse("My Name Is Andrei"))
console.log(reverse2("My Name Is Andrei"))
console.log(reverse3("My Name Is Andrei"))
console.log(reverse4("My Name Is Andrei"))