
// If you apply .then() on resolved promise, it will execute
function f()
{
    return new Promise((resolve,reject)=> {
        setTimeout(function (){
            resolve(2);
        },3000);
    })
}

let p = f();

p.then(function ()
{
    console.log(1);
})

setTimeout(function ()
{
    p.then(function ()
    {
        console.log(2)
    })
},2000);