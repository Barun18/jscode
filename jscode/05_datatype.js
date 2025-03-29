/*** DATA TYPES***/
//Primitive and non-Primitive

/*Primitive*/
/* 7 types: string,number,boolean,null,undefined,symbol,bigInt*/


let str="barun" 
console.log(str)      //str store string data type

let num=100         //these are number types
let num1=100.3
console.log(num)    //100
console.log(num1)   //100.3


let bool1=false    //Check boolean
let bool2=true
console.log(bool1)   //false
console.log(bool2)   //true

let nullt=null       //check null
let unde             //check undefined
console.log(nullt)   //null
console.log(unde)    //Undefined


let sym=Symbol("123")
let symb=Symbol("123")
console.log(sym)       //symbol(123)
console.log(symb)      //symbol(123)
console.log(sym === symb)    //Returned value is not same for sym and symb

//let big=234567896876999  //2.34567896876999
let big=234567896876999n      
console.log(big)
console.log(typeof(big))    //234567896876999 

/** Reference(NonPrimitve)*/

/** Array,Objects,Functions*/
const arr=["A","B",'C']         //arr is object types variable
console.log(arr)
console.log(typeof(arr))
const arr1={
    ar1:"barun",                //arr1 is also object types variable 
    ar2:100,
    ar3:"ghorai"
}
console.log(arr1)

const myFunctions=function(){      //myFunctions is function type variable    actually it is called function objects 
    console.log("Hello world")
}
console.log(typeof(myFunctions))





