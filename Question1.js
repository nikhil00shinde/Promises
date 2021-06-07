// ONLY FIRST ONE WILL RUN
// TELL THE OUTPUT
let promise = new Promise(function executor(resolve,reject){
            reject("Rejected 1!");
            
            
});

promise.catch(function (err)
{
  console.log(err);
});
console.log(8);
// promise.then(function (data)
// {
//     console.log(data);
// })
