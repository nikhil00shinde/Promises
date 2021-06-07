* callback -> we pass function as  a parameter/argument to other functions
* we can see use of callback in 2 ways:
    * Events(browser)
    * Asynchronous

* As long as, we have synchronus task they will execute first than Asynchrounous task.
* we have 2 execution state stack and Node API. 
  * In stack where all synchronous task is done.
  * And In node api where all asynchronous task is done.

* We have to main problem with the callback
   * Callback Hell(Debugging,Readebility & Maintainance issue)
   * Inversion of control (control reverts back from you to another, on callback call)

#### To avoid this problem we came with a solution which is PROMISES

---
## Promise
* (we have control)
* When the task is done, we will get notify and we will do our own operation.

* *Object*
* *Denote a task (running)*
* *Future value*

* 2 ways :-
  * **State** -> pending and fulfilled
  * **Result** -> undefined and err/data

* To understand Promise just, we have to remember that when the task is done we will get notify.
* Promise expect a notification on every task to do operation.
   * if we give notification then don't do any task then it will give an error.
* Only one the reject or resolve function is called, And if we have more than that then the other will get ignore

* Three ways to callback:
  * ( (resolve,reject)=>{--------})
  * (function (resolve,reject){------})
  * (laterOp)
      * function laterOp(data)
      {
        console.log(data);
      }

* Promise also provide a another good functionality that is it will do asynchronous task in sequenctial manner that is called *chaining*, the concept is promise chaining.

* For a single promise, we can use multiple  .then() & .catch() in promise and it will print in the sequencial manner that is what order we write.(Promise.js)

* We can use .then() on same promise as again multiple times as **CHAIN** (Question.js)
  * If we don't *explicitly* return promise inside a .then() then .then() will *implicitly* return promise in which the resolve value will be ***undefined***
  * If we return a value in the .then() function as implicit promise(return) then the chaining .then() get resolve value as return value

* .then(), will only run when the resolve is called. If it have more .then() it will wait in queue in Node API then it will run (Promise3.js)
* If you apply .then() on resolved promise, it will execute