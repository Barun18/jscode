/**Memory Types and use*/
//Stack and Heap --two types

//Stack catches all primitive values 
//And Heap cathces all non-primitive values


//Stack memory copy the value and modify for another place if needed but not change the original value
let var1="abcdef"      //abcdef is assign to var1
let var2=var1          // The copy of abcdef is assign to var2
//console.log(var2)    // it will shows abcdef
var2="zyxw"            // The copy of abcdef is modifyed and set zyxw
                       
console.log(var1)      //var1 shows abcdef
console.log(var2)     //var2 shows newly modified value zyxw..

//heap memory gives reference to every variable
let userOne={
 email:"barun@gmail.com",
 name:"barun"
}
 let userTwo=userOne            //Two different variables reference the same value so
 userTwo.email="no@gmail.com"  //If one is changed then another reference's value will be changed
 console.log(userOne)          //email:no@gmail.com
 console.log(userTwo)          //email:no@gmail.com




