// PROMISE IN LOOP PARALLEL 
// THE NEXT PENDING PROMISE WILL NOT WAIT FOR PREVIOUS PENDING PROMISE
// THEY WILL RUN PARALLELY
// THEY WILL OUTPUT RANDOMLY, DEPENDING UPON WHO GET RESOLVED FIRST

function f()
{
    return new Promise(function executor(resolve,reject)
    {
        setTimeout(function ()
        {
            resolve();
        },2000);
    })
}

let p;

for(let i=0;i<3;i++)
{
    p = f();

    p.then(function(){
    console.log("resolved!");
    });
}