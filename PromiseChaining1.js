// This concept is PROMISE CHAINING in which we can use asynchronous tast sequentially

let fs = require("fs");

function f(path)
{
    return new Promise(function (resolve,reject)
    {
        fs.readFile(path,function (error,data)
        {
            if(error) reject(error);
            else      resolve(data);
        })
    })
}

let p1 = f("./f1.txt");

p1.then(function (data)     // same let pp2 = p1.then(function (data)
{                            // {                           
    console.log(data+"");           //console.log(data+"");
    let p2 = f("f2.txt");     // let p2 = f("f2.txt");
    return p2;                //  return p2;
})                            // )}
.then(function (data)         // p22.then()... continue
{
    console.log(data+"");
    let p3 = f("f3.txt");
    return p3;
})
.then(function (data)
{
    console.log(data+"");
}).catch(function (err)
{
    console.log(err);
})

// If in any case we get an error then, we will diretcly come to .catch() function