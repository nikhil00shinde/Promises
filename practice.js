let fs = require("fs");
function f()
{
    return new Promise((resolve,reject) =>{
        fs.readFile("f1.txt",function(err,data)
        {
            resolve(data+"");
        })
    });
};
let p = f();


p.then(function (data)
{
    // IT WILL PRINT IN ORDER IF WE APPLY .then ON SAME PROMISE
    console.log(data);
    let p1 = f();
    return p1;
})
.then(function (data)
{
    console.log(1,data);
    let p2 = f();
    return p2;
})
.then(function(data)
{
    console.log(2,data);
})
.then(function (data)
{
    console.log(3,data)
})


