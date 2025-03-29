

/****OPERATIONS*********/


console.log(2+3)    //5
console.log(2-3)    //-1
console.log("2"-3)    //-1
console.log(2-"3")    //-1
console.log("2"+2)   //22
console.log(2+"5")   //25
console.log("2"+"2")  //22
console.log("1"+2+2)  //122
console.log(1+2+"2")   //32     // At first 1+2 is performed then result will be concatenated with next string. 
console.log(2+1+2+"3")  //53   //At first 2+1+2 is performed and then next string will be concatenated.

console.log(2 + 3 * 5 / 2)   //This is wrong for programmar(Because here first * and then / and next + will be performed).
console.log( (2 + 3) * 5 / 2)    //We can use this..

console.log(true)            //true
console.log(+true)           // 1
console.log(1+true)          //2
console.log(true+true+5)      // 1+1+5=7
//console.log(true+)          //Throw an error
console.log(+false)           // 0
console.log(+true+true+false) // 2+0=2

let gameCounter=100
//gameCounter++                 //101  first assign than increment
++gameCounter                   //101  first increment than assign
console.log(gameCounter)

/******Comparision Operators*****/
console.log(1>2)             //false
console.log(1>=2)            //false
console.log(1<2)             //true
console.log(1<=2)            //true
console.log(9==9)            //true

console.log(null>0)            //false
console.log(null>=0)           //true  
console.log(null<0)            //false  
console.log(null<=0)           //true
console.log(null==0)           //false
console.log(undefined == 0)   //false

console.log("2" == 2)        //true    "2" is converted into 2 ..== is not equal operator
console.log("2" === 2)       //false    "2" is not converted into 2 ..here  ===is equal operator

