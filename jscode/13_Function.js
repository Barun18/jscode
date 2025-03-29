////// Let's Start FUNCTION //////

//1:console.log("B")
//2:console.log("A")
//3:console.log("R")
//4:console.log("U")
//5:console.log("N")
 
//function my(){}                 //This is called function declaration.
function my(){
       console.log("B")
       console.log("A")
       console.log("R")
       console.log("U")
       console.log("N")
}
 
//my                                //This is function reference. After run it we will not get anything.
my()                                // This is Function execution
// Now add two numbers using function
function addTwo1(num1,num2){              //Function passes two parameters
console.log(num1+num2)
}
//addTwo()                             // O/P: NaN--Not a number  ..There are no arguments
 addTwo1(3,5)                            //O/P: 8   ..There are two arguments.
// addTwo(3,null)                         //O/P: 3_  null will be concatenate after 3.
// addTwo(7,"1")                          //O/P:71,  7 is treated like a string as one is already a string
 addTwo1("q",3)                          //O/P:q3, 3 is treated like a string as one is already a string

//Now try to save return value into another variable
//const Result=addTwo(4,9)                   //Example of returning value
//console.log("Result",Result)               // O/P: Result gets 'Undefined'.
function addTwo(num1,num2){ 
     //let result=num1+num2                   //summation value is assinged into result
     //return result                          //result is returned as the return value
     return num1+num2                     //if we dont want to use extra variable then use this line.
}
// const Result=addTwo(8,9)                 
console.log("Result=",addTwo(8,9))                    //addTwo() will accept the return value.
 
function userLoginMessage(username){
   return `${username}Just Logged In.`
}
console.log(userLoginMessage("BarunG"))                // BarunG just logged in.
console.log(userLoginMessage(""))                       // just logged in.
console.log(userLoginMessage())                         //undefined just logged in.

// USE IF statement
function userlogin(username){
       // if(username === undefined){                     // If this condition is true then execute the block and return.
       // } 
      if(!username) {                                 // HERE username === undefined is equal to !username 
        console.log("Please Enter username correctly")
            return
       }
                                                 
       return `${username} just Logged in here.`         // when if  condition is false then this wil be executed.

}
console.log(userlogin())                           // O/P:undefined
console.log(userlogin("barun"))                             // barun just Logged in here.

        //Use of Default value
function user(uname1="You"){                    //When we use default value then if statement always be false 
       if (!uname1){                            // beacuse uname1 gets minimun You value
              console.log("Please enter username")
              return
       }
       return `${uname1} Logged in`
} 
console.log(user())   

//When passing argument numbers are unknown.
function arguNumUnknown(arg){                      //function accept just one argument.That's why follow 78 onwords 
       return arg
}
console.log(arguNumUnknown(100,200))                      //return 100. BUt i pass 2 argument.
function arguNumUnknown1(...arg){                     // ... this jhree dots are called rest operator.
       return arg  
}
console.log(arguNumUnknown1(100,200,300,4000))               //[ 100, 200, 300 ]
function arguNumUnknown2(va1,va2,...arg){
       return arg                              // first value assign to val1,next value asign to val2 that's why rest of the value are returned as only arg value return all. 
}
console.log(arguNumUnknown2(100,200,300,400,500)) 
// function arguNumUnknown3(...arg,va1,va2){        // (...arg,val1,val2) through an Error!
//        return arg 
// }
// console.log(arguNumUnknown3(100,200,300,400,500)) 

//Passing object through a function.
//create object
const user2={
       username:"Barun",
       price:299
}
//create function and pass object
function handleObject(anyobject){
       console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)                   //Username is Barun and Price is 299
}
//call the function
handleObject(user2)       
//we can pass objects in this way                  
handleObject({
       username:"Arun",
       price:499,                              //This also return same i.e Username is Arun and Price is 499. 
})
//Pass an array through a function
//create an array
const myarr=[12,78,20,72]
//create a function
function passFunction(anyarr){
       return anyarr                                // Return :[ 12, 78, 20, 72 ]
       //return any value from any index. 
       //return anyarr[2]                              // return: 20
}
//pass the array
//console.log(passFunction(myarr))
console.log(passFunction([34,56,78]))                  //[ 34, 56, 78 ]




