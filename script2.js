// PROMISE -> Object
//         -> Denotes a task (function)
//         -> Gives Future value

const fs = require("fs");

let p = new Promise(function executor(resolve,reject){
        
    fs.readFile("./f1.txt",function (error,data){
          
        if(error) reject(error);
        else resolve(data);      // In resolve and reject only parameter is passed
    })
});

// As we know promise is a object, we can get data by using some method
// resolve function will notify

//for resolve
p.then(function (data)
{
    console.log("Data is recived");
    console.log(data+"");
})

//for error
p.catch(function (err)
{
    // to check if error
})