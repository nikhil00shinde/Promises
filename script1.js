let fs = require("fs");

console.log(1);

fs.readFile("f1.txt",operation);

console.log(2);

function operation(error,data)
{
    console.log(data.toString());
}

console.log(3);


// FIRST ALL THE SYNCHRONOUS TASK WILL FINISH THAN ASYNCHRONOUS TASK.

