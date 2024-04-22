let promise = new Promise(function(resolve,reject){
   // resolve("hello");
   reject("Promise rejected");
});
promise.then(function(successMessage){
    //success handler function is invoked
    console.log(successMessage);
})
promise.catch(function(errorMessage){
    //error handler function is invoked
    console.log(errorMessage);
});

