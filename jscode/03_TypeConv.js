//(1)  String to Number
//(2)  Number to string
//(3)  Null to number
//(4)  Empty string to Bolean
//(5)  Null to string 


let str="33"
console.log(str)
console.log(typeof str)      //type check

strNumber=Number(str)        //type conversion string to number
console.log(typeof strNumber) 

 let str1="abc" 
 strNumber=Number(str1)         //Converted into number type but it is not a number i.e NaN
 console.log(typeof strNumber)   // It will gives us number types.
console.log(strNumber)           // It will give NaN  

let num=33
console.log(num)
 
numString=String(num)          //typr conversion number to string
console.log(typeof numString)  // It will gives String
console.log(numString)         

let bool="35"
console.log(bool)
boolStr=Number(bool)             //35(string)=>35(number)
console.log( typeof (boolStr))
console.log(boolStr)

let bl=null
console.log(bl)
blB=Number(bl)                //null => 0
console.log( typeof (blB))
console.log(blB)
                                 // Conversion string to Boolean
let str2=""                       //" " => false    If String is empty then it will shows false
strNum=Boolean(str2)              //"barun" => true If atleast one element into string then it will shows true
console.log(typeof(strNum))
console.log(strNum)

let n=null
strNull=String(n)               // Null converted into string
console.log(typeof(strNull))
console.log(strNull)

