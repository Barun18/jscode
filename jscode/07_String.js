/* String ----VERY VERY IMPORTANT*/

const name="Barun"
const title="Ghorai"
// const num=10
 console.log(name +" "+ title)    //Concatenation by variable name  //Barun Ghorai
 console.log("My name is "+ name) //string with variable            //My name is Barun
// // console.log("This number is "+num);

console.log(`My name is  ${name} and My title is ${title}`)  //Here does not use single quotation.. Here use single back quote

// //we can declare a string in this way
//const str=new String('Barun')
 const str="Barun"
// console.log(str[0])             //It shows B
 console.log(str.__proto__)     //It shows empty object like {} but actually it is not empty

console.log(str.toUpperCase())   //Uppercase(),lowercase() and so many functions are available in js
console.log(str.length)          //Calculate length
console.log(str.charAt(3))       //checking character
console.log(str.toUpperCase().charAt(3))    // Finding character and convert to uppercase or lowercase.
console.log(str.indexOf('u'))    //Checking position of character

console.log(str.substring(0,4))   //create a substring
console.log(str.slice(0,3))

const newstr="abcdefghih"
const news=newstr.slice(2,5)     // from -ve index to +ve slice does not exist
console.log(news)
let chtrim="   barun  ! "        //O/P:   barun  !  with front space
console.log(chtrim)
console.log(chtrim.trim())       //O/P: barun  !   without front space

const url="https//www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"

console.log(url.replace("e2y","bby")) //In replace method we have to pass searching element and then pass replace element using quatation
console.log(url.includes("e2y"))    //false       // In the url e2y is replaced by bby..
console.log(url.includes("youtube"))  //true     //includes method is used to check if "youtube" is present or not.
console.log(url)                       //Url must be editable 
                                             
