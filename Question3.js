//  We can use .then() on same promise as again multiple times as CHAIN (Question.js)
// If we don't explicitly return promise inside a .then() then .then() will implicitly 
   //return promise in which the resolve value will be undefined


console.log("Instructions to make sandwich");
let p = new Promise(function (resolve, reject) 
{
    resolve("1: Obtain Necessary Ingredients");
});

p.then(function (step) 
{
    console.log(step);
})
.then(function ()   // HERE In function data exist but as a undefined value because we get promise with resolve value as undefined
{
    console.log("2: Lay Out Your Ingredients");
})
.then(function ()
{
    console.log("3: Prepare the Tomatoes");
})
.then(function () 
{
    console.log("4: Prepare Bread");
})
.then(function () 
{
    console.log("5: Put Cheese on the Bread");
})
.then(function () 
{
    console.log("6: Construct the Sandwich");
})
.then(function () 
{
    console.log("7: Turn on the Cooking Surface");
})
.then(function () 
{
    console.log("8: Add Butter and Place Frying Pan on the Stove");
})
.then(function () 
{
    console.log("9: Cook the Sandwich");
})
.then(function () 
{
    console.log("10: Remove and Enjoy");
});







/////////////////////////////////////
// BELOW IS QUESTION
//////////////////////////////////////



// console.log("Instructions to make sandwich");
// let p = new Promise(function (resolve, reject) 
// {
//     resolve("1: Obtain Necessary Ingredients");
// });

// p.then(function (step) 
// {
//     console.log(step);
// });
// p.then(function ()
// {
//     console.log("3: Prepare the Tomatoes");
// });
// p.then(function () 
// {
//     console.log("2: Lay Out Your Ingredients");
// });
// p.then(function () 
// {
//     console.log("6: Construct the Sandwich");
// });
// p.then(function () 
// {
//     console.log("7: Turn on the Cooking Surface");
// });
// p.then(function () 
// {
//     console.log("4: Prepare Bread");
// });
// p.then(function () 
// {
//     console.log("5: Put Cheese on the Bread");
// });
// p.then(function () 
// {
//     console.log("10: Remove and Enjoy");
// });
// p.then(function () 
// {
//     console.log("8: Add Butter and Place Frying Pan on the Stove");
// });
// p.then(function () 
// {
//     console.log("9: Cook the Sandwich");
// });