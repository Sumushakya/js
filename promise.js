//let promise = new Promise((resolve,reject) => {
// console.log("I am a promise");
  //  reject("some error");});

  //function getData(dataId,getNextData){
    //return new Promise((resolve, reject)=>{
        //setTimeout(() => {
            //console.log("data",dataId);
            //resolve("success");
            //reject("error");
            //if(getNextData){
                //getNextData();} },5000);}); }

                let promise = new Promise(function(resolve,reject){
                  let x = "hello";
                  let y = "hello";
                  if(x==y){
                      resolve();
                  }else{
                      reject();
                  }   
              });
              
              promise.then(function(){
                  console.log("success");
              })
              promise.catch(function(){
                  console.log("Error");
              });
              
                             