// let promise = new Promise(function(resolve,reject){
//    // resolve("hello");
//    reject("Promise rejected");
// });
// promise.then(function(successMessage){
//     //success handler function is invoked
//     console.log(successMessage);
// })
// promise.catch(function(errorMessage){
//     //error handler function is invoked
//     console.log(errorMessage);
// });

const getPromise = () =>{
    return new Promise((resolve, reject) => {
        //resolve("success");
        reject("error");
    });
};
let promise = getPromise();
promise.then(() => {
    console.log("Promise fulfilled");
});
promise.catch(() =>{
    console.log("error has occured");
})
