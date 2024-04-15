function Person(first, last, age, address){
    this.first= first,
    this.last= last,
    this.age= age,
    this.address = address,
    this.name= function(){
        return this.first =" " + this.last
    };
}

const myFather=new Person("ram","bahadur",20,"patan");

console.log("My father is" + myFather.name());
