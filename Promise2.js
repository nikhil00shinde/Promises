var p = new Promise((resolve,reject) =>
{
    resolve("Resolved!");
})


// p.then(function (data)
// {
//     console.log(data);
// }).then(function (data)
// {                               
//     console.log(data);        /// WILL GET AS A UNDEFINED VALUE
// })

p.then(function (data)
{
    console.log(data);
    return 2;
}).then(function (data)
{
    console.log(data); // WILL VALUE AS A 2
})