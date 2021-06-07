
let fs = require("fs");

function f(path)
{
    return new Promise((resolve,reject)=>{
        fs.readFile(path,function (err,data)
        {
            if(err) reject(err);
            else resolve(data);
        });

    })
}
// IT WILL PRINT IN THE SEQUENCE

let p1 = f("f1.txt");

p1.then(function (data){
    console.log(data+"");
})

p1.then(function (data){
    console.log(1);
})

p1.then(function (data){
    console.log(2);
})

p1.then(function (data){
    console.log(3);
})
