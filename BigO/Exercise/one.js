function funChallange(input){
    let a = 10; //O1
    a = 50 + 3; //O1
    for (let i=0; i< input; i++){ //O(n)
        anotherFunction(); //O(n)
        let stranger = true; //O(n)
        a++; //O(n)
    }
    return a; // O(1)
}


// BIG O(3 + 4n)
