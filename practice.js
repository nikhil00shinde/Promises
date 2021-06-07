
var p = new Promise((resolve,reject) =>
{
    resolve("Resolved!");
})

// p.then(function (data)
// {
//     console.log(data);
// })
p.then(function (data)
{
    console.log(data);
}).then(function (data)
{
    console.log(data);
})
