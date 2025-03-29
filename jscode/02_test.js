"use strict"  //treat all js code as newer version.But now all codes are treated as newer version

console.log("barun"); console.log(3+3);    //This type of codes is lack of code readability

console.log(3
    +3       //It is also lack of code readabilit
    )

//Data types in javascript
//1:number    range is 2 to the power 53
//2:bigint     if needed number is bigger than 2 to the power 53
//3:strig      a-z,A-Z
//4:boolean    =>tre/false
//5:null       =>standaloe value
//6:ndefined   =>value is undefied
//symbol       =>unique(used in react)
//objects
const accId=123
let age=18
let nam="barun"
let answer=true     //answer is boolean type
let empty=null      //empty's type is objects..So null is an objects 
let you            //Here you is an undefined type

console.log([accId,age,nam,answer,empty,you])
console.table([accId,age,nam,answer,empty,you])       // Output as a Table form


//checking the types of data
console.log(typeof nam)        
console.log(typeof age)        
console.log(typeof empty)        //empty's type is objects..So null is an objects 
console.log(typeof answer)       //answer is boolean type
console.log(typeof you)          //Here you is an undefined type