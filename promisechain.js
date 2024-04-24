// function getData1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//          },2000);
//     });
// }
// function getData2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//          },2000);
//     });
// }
// console.log("fectching data1");
// getData1().then((res) => {
//     console.log(res)
//     console.log("fetching data2");
//     getData2().then((res) => {
//         console.log(res);
//     })
// });
function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            //reject("error");
             },2000);
            });
         }

         getData(1)
         .then((res) => {
            return getData(2);
         })
         .then((res) => {
            return getData(3);
         })
         .then((res) => {
            console.log("success");
         });

        //  getData(1).then((res) => {
        //     console.log(res);
        //     getData(2).then(() =>{
        //         console.log(res);
        //     })
        //  })

