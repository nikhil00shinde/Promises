
function f()
{
    return new Promise(function (resolve,reject)
    {
        setTimeout(function()
        {
                 resolve(2);
        },2000)
    })
}

let p = f();
// To check promise at creation phase
console.log(p);


// To check promise at fullfilled state
setTimeout(function()
{
    console.log(p);
},3000);