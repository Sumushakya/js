let DATA ="secret info";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

viewData() {
    console.log("data = ",DATA);
}
}
class Admin extends User{
    constructor(name,email){
        super(name,email);   
     }
    
    editData(){
        DATA="new info";
    }
}

 let student1= new User("ram","abc@gmail.com");
 let student2= new User("shyam","shyam@email.com");

let teacher1= new User("dean","dean@gmail.com");

let admin1 =new Admin("admin","admin@email.com");

