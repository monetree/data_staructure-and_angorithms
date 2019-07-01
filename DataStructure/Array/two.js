class myArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index]
    } //O(1)

    push(item){
        this.data[this.length] = item
        this.length++;
        return this
    } //O(1)

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return this
    } //O(1)

    delete(index){
        const item = this.data[index];
        this.shiftItems(index)
        return item
    } // o(n)

    shiftItems(index){
        for (let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length-1]
        this.length--;
    }

    lookup(item){
        for (let i=0; i < this.length;i++){
            if (this.data[i] === item){
               return true
            } 
        }
        return false
    }
}


const newArray = new myArray();
newArray.get(0);
newArray.push('hey');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.delete(1)
newArray.push('are');
newArray.push('nice');
newArray.lookup('nice')
console.log(newArray)


