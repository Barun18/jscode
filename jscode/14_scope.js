//SCOPE//
//There are 2 types of scopes :one is global and another is local scope. define by {}
let a=10
const b=15
var c =30
// which one should we use most
// console.log(a) //These arer all correct.
// console.log(b)
// console.log(c)
//
if(true){          //the scope of if statement is from line 11 to 15.
    let a=17
    const b=19 
    var c =33
}
// console.log(a)                              // return global value 10 
// console.log(b)                              // return global value 15
// console.log(c)                              //but this return loal value that is 33 which is the actual problem.
// So,we can access all global value from any where but we can't access local value from out side of the class accept use of 'var', we can access the local value from the outside of the class.
//try to access global value in a scope
if(true){             //we can access all global value
    console.log(a)                              
    console.log(b)                              
    console.log(c)
}
// The problem of 'var' variable is it gives the priority to access the local value first from the outside of the class. this is very big problem. that's why now-a-days 'var' does not use .


//SCOPE level and MINI HOISTING
//create a function
function one() {
    const username="barun"
    function two(){
        const uname="myname"
        console.log(username)
        console.log(uname)
    }
    // console.log(uname)
    two()
}
one()

if(true){
    const username1="ghorai"
    if(username1 === "ghorai"){
        const uname="inner"
        console.log(username1,uname)
    }
//console.log(uname)                        //Scope of uname is from 45-48 line but not for outside
}
//console.log(username1)                   // Scope from 43-50 only.

// Scope creating a function
function fun1(num1){
    return num1 + 1
}
console.log(fun1(5))
// Another way to use scope by function
const fun2=function(num2){
    return num2 + 2
}
console.log(fun2(5))

// Check this two types function: first calling and then difining.
console.log(fun3(5))
function fun3(num1){
    return num1 + 1
}

//console.log(fun4(5))             // : Cannot access 'fun4' before initialization
// const fun4=function(num2){       // trying access before initialization is called hoisting.
//     return num2 + 2
// }


