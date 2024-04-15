function Car(make, model, year, color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
}

const car1=new Car("ford","mustang",2024,"red");
const car2=new Car("dodge","charger",2024,"silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
