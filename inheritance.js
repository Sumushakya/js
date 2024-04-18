class Person{
    constructor(name){ 
        this.species =" homo species";
        this.name=name;
    }
    eat(){
        console.log("eat something");
    }
}
class Engineer extends Person{
    constructor(name){
        super(name);//to invoke parent class constructor
    }
    work(){
        super.eat();
        console.log("work");
    }
}

let erobj = new Engineer("ram");
