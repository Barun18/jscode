// IF condition
const p=20
if (p==20){           //condition true
    console.log("p",p)    // go to the scope of if condition statement.
}

let name1="Ashit"
if(name1 !== "ashit"){        // Condition true "Ashit" is not equal to "ashit".
 console.log("name1=",name1)
}
if(2 == 2){
    console.log("true")
}
if(2 === "2"){                        //=== is different from ==
    console.log("True")
}
else{
    console.log(" == and === are not same, === tries to check data types.")
}
const bp="anjana"
if(true){
    let ap="adrija"
    console.log(`This is ${ap} know it.`)
    console.log(bp)
}
if(true){
    var sb="barun"                     // It can be access from outside of this scope. It is drawback of var data types.   
    console.log("sb=",sb)
}
console.log("var =",sb)
const balance=1000
if(balance>500) console.log("Okk.")    //For one line we can write this without any {}.BUT this is not a goosd practie. 

// Check multi condition use and (&&) operator
const userLogedin =true
const debitCard= true
if(userLogedin && debitCard ){            //Two condtion should be true.
 console.log("You can buy")               //You can buy
}
//Check multi condition use or (||) operator
const logedinFromGoogle=false
const logedinFromEami=true
if(logedinFromGoogle || logedinFromEami){           //Atleast one is true.Then com=ndition could be true.
    console.log("you can buy now.")        //you can buy now.
}

// Nullish Coalescing Operator (??): null undefined
const val1= 5 ?? 10
console.log("val1:",val1)              //val1: 5
const val2=null ?? 10                  // 
console.log("val2:",val2)              //val2: 10
const val3=null ?? 0 
console.log("val3:",val3)               //val3: 0
var val4=undefined ?? 14
console.log("val4:",val4)              //val4: 14
const val5=null ?? 10 ?? 10 
console.log("val5:",val5)               //val5: 10 Whenever first value comes then it will be return.

// Ternary Operator
const love=100
love >= 90 ? console.log("Possible marrage.") : console.log("Impossible to marriage.")      // If condition is true then left side of the colon will be executed otheerwise right side will be executed.


// Switch  case
const month=4
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("Default match.")
        break;
}

//SWITCH CASE USUING STRING.
const month1="MARCH"
switch (month1) {
    case "JANUARY":
        console.log("january")
        break;                      // If suppose break keyword is not exist then, if this statement is true, then after this execution all case will be executed along with default statement.
    case "FEBRUARY":
        console.log("february")
        break;
    case "MARCH":
        console.log("march")
        break;
    case "APRIL":
        console.log("april")
        break;

    default:
        console.log("Default match.")
        break;
}

// TRUTHY VALUE

const userEmail="ran865@.com"        //If something in string then assume that if condition is true
if(userEmail){ 
     console.log("You got permissio.n")      //This will execute.
}
else{
    console.log("you can't got the pemission.")
}

const userEmail1=""      // If string is empty then assume that if condition is false
if(userEmail1){ 
     console.log("You got permission")        
}
else{
    console.log("you can't got the pemission.")        //This will be execute.
}

//FALSE values are-->    false, 0, -0, Bigint 0n, null, NaN,undefined,"" .  Thse are all assume as falsy value
//TRUTHY values are-->   "0",'false'," "(space between double quote),[],{},function(){}.

//How to check empty length of an array
const arr=[]
if(arr.length === 0){
    console.log("Empty array.")     //Empty array.
}
const emptyObject={}
if(Object.keys(emptyObject)){         // Condition value is not empty so if condition will be exucuted.
    console.log("Empty object.")       //Empty object.
}
else{
    console.log("Not empty.") //Not empty.
} 
const emptyObject2={}
if(Object.keys(emptyObject2).length === 0){   //Condition is true     
console.log("Empty object.")    
 } 
 else{
console.log("Not empty.")                  //Empty object.
 }
 const emptyObject3={}
 if(Object.keys(emptyObject3).length){    //Because this condition statement returns 0. So if is false.      
 console.log("Empty object.")    
  } 
  else{
 console.log("Not empty.")                //Not empty.
  }


  

  


