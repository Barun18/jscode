// // use of this
 const one={
    username:"barun",
    price:999,
    welcomeMessage: function(){
    console.log(`${this.username},welcome for loged in`)
    console.log(this.price)
     // This key word is used in the same scope to access scope content of parent scope.
     console.log(this)  //It will return the content of object one.
   } 
   
 }
 one.welcomeMessage()
 one.username="sham" //externally channged objects's key value
 one.welcomeMessage()
 console.log(this)              // it will returns {}.but in browser it returns window objects.

 //Now let's check in function what will this keyword returns
 function chai(){
   let uname3 = "adrija"
    console.log(this.uname3)            // undefined
    console.log(this)                // We can use this keyword in the object only.We can't use this keyword in function()
 }
 chai()                            //It will return all the content of function().

 const ano=function(){
   let you="anjana"
   console.log(this.you)         //undefined
 }
ano()

//Now create arrow function.
//syntax  ()=>{}
const fun = () => {
   // this is the body of arrow function.
   let a="A"
   console.log(a,"For Anjana.")
}    
fun()
const fun2 = (num1,num2)=>{   //we create a arrow function and assign it with a variable
   return num1 + num2
}
const sum=fun2(12,9)
console.log(sum)
// Another way we can declare arrow function.
const like = (num1,num2) => num1 + num2      // don't need to write return keyword.But if we take { } for function scope then obviously should to write return keyword before num1."THIS IS CALLED IMPLICIT RETURN."
console.log(like(2,4))

const like1 = (n1,n2) => (n1+n2)    // we can't use {} or [] to replace this ().   
console.log(like1(3,9))

const like2 = (n1,n2) => (n1+n2)     // We cvan't use any kind of statement here.
console.log("The sum is:",like2(3,9))   // We can write statement first then call function.OUTPUT:  The sum is: 12

const obj = () => {username:"abc"}       //undefined
console.log(obj())
// For implicit retention It is mandatory to wrap all with ().
const obj1 = () => ({username:"abc"})            //{ username: 'abc' }
console.log(obj1())

