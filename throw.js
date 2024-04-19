try{
    const dividend= window.prompt("enter a dividend");
const divisor= window.prompt("enter a divisor");

if(divisor == 0){
    throw new Error("You can't divide by 0");

}
const result = dividend/divisor;
console.log(result);
}
catch(err){
    console.log(err);
}
console.log("the end");