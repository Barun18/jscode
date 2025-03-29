//****Properties of numbers allowed by javascripts..See into browser console */

const num=300.98
console.log(num)
console.log(typeof(num))        // num decides it's type after getting value.

const balance=new Number(400.06)   //This Number method convert parameters into Number.
console.log(balance)
console.log(typeof(balance))    //It specifies the type

console.log(balance.toString().length)  //Number is converted into string and calculate length
console.log(balance.toFixed(3))         // toFixed  is used to fixed required decimal places

 const numC=72.7654321
 console.log(numC.toPrecision(3))         // presized the number according to the entered precision values 

 const hundreds=10000000
 console.log(hundreds.toLocaleString());   // Clearly Understable any long digit as indian style .
                                            //If we can't find this types of number then wright 'en-In'..




               //****************MATH********/
              
console.log(Math.abs(-4))            // Abs() returns absolute value  (-ve value is converted into +ve value) 
console.log(Math.round(5.8))         // Roundoff any number
console.log(Math.ceil(4.1))          // ceil() returns Upper value of the given digits      
console.log(Math.floor(4.9))         //floor() returns Lower value of the given digits        
console.log(Math.max(2,7,9,1,5))     //Returns maximum value of given digits
console.log(Math.min(2,7,9,1,5))     //Returns minimum value of given digits
console.log(Math.random())           //random() returns a random value fom 0 to 1 in decimal number 
console.log(Math.random() *10)         //Now random() *10 returns a digits between 0.-- to 9.--
console.log((Math.random() *10) +1)    //This will returns digit between 1 to 9.

console.log(Math.floor((Math.random() *10) +1))  // This returns floor value of randon number Lowest foor value for this case is 1..
console.log(Math.ceil((Math.random() *10) +1))   // If random generates .910123.. then .910123*10=9.10123, 
                                               //then 9.10123+1=10.10123, then by ceil() it returns 11..
const min=15                                // We can get any random number between any range by these 36,37,38 line of codes
const max=25
console.log((Math.floor(Math.random() * (max-min+1))) + min) //We can decide getting number will be after 'max' value or after 'min' value



