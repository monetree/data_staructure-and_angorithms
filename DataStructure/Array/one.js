class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type)
    }
    play() {
        console.log(`WEEEEEEEEE I am a ${this.type}`)
    }
}


const wizard1 = new Wizard('Shally', 'Header');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard2.introduce()