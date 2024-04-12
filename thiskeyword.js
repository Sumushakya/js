const person={
    firstName:"john",
    lastName:"Doe",
    age:20,
    greet:function(){
        console.log("the name is" + " " +this.firstName + " "+ this.lastName);
    }
};
person.greet();
