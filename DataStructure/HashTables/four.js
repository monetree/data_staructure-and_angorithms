
class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    showHashTable(){
        return this.data
    }

    _hash(key){
        let hash = 0
        for (let i=0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    } // O(1)

    set(key, value){
        let address = this._hash(key)
        if(!this.data.address){
            this.data[address] = {}
        }
        this.data[address]={key, value}
    } //O(1)

    get(key){
        let address = this._hash(key)
        if(address){
            let value = this.data[address].value
            return value
        }
        return undefined
    } // O(1)

    keys(){
        const keys = [];
        for (let i=0; i < this.data.length; i++){
            if(this.data[i]){
                keys.push(this.data[i].key)
            }
        }
        return keys
    }  // 0(1)

    values(){
        const values = [];
        for (let i=0; i < this.data.length; i++){
            if(this.data[i]){
                values.push(this.data[i].value)
            }
        }
        return values
    }  // 0(1)
}


const myHashTable = new HashTable(50)
myHashTable.set('grapes', 1000)
myHashTable.set('apples', 52)
myHashTable.set('oranges', 2)
myHashTable.get('apples')
myHashTable.keys()
myHashTable.values()

// console.log(myHashTable.showHashTable())