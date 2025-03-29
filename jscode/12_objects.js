//MOST IMPORTANT TWO KEY POINT FOR JAVASCRIPT
// 1:Objects and 
// 2:Events
//There are two types of objectss 1)Singleton and 2)Non singleton
//Object.create              this is constructor method for creation singleton object


                   //PART ONE//
//Objects literals

//const jsUser={}  // This is an objects.Here object is empty and it is not an singleton object.
 const jsUser={
    name:"amit",                           // we can write number as a key name.
    "full_name":"Barun ghorai",           // behind the screen Key name is treated as string
    age:20,
    phone:9854132402,
    location:"kgp",
    email:"ran@gmail.com",
    isLoggedIn:false,
    //"course name":"computer science"    //We can't use this type of variable name because 28 line
}
 console.log(jsUser.full_name)                 // Error , Because key name within cotetion can't access by this dot method. 
 console.log(jsUser.name)                                //amit    //This is a normal process

 console.log(jsUser["name"])        //amit,20    //This is a standard process
 //console.log(jsUser."full_name")                   //By dot method it is imposible to get the value
 console.log(jsUser["full_name"])        // *** IDEAL SYNTAX TO GET ANY KEY VALUE ***

//console.log(jsUser.course name)     //    This is wrong 

// //Question? Take a symbol then add into object's key and print its value.
const mysym = Symbol("Key")                   //Declaration of symbol-31.USe symbol in object-36.And access the symbol value at -39.

 const obj={                                    //declaration of objects
    name:"vabesh",
    //mysym:"myKeyValue",                 // It will not return symbol data types. It will returns String(data types) and myKeyValue(key Value)
     [mysym]:"MyKeyValue",                       //Actual syntaxuse square bracket to get symbol data types.
      email:"ranghorai865@gmail.com",
 }
 console.log(typeof obj[mysym])                      //Normal Way to access key value and check data type.
 console.log(obj[mysym])                   //This is a standard way.        O/P:MyKeyValue

 //obj.name="vabataran"
 //Object.freeze(obj)                          //We freeze the object so we can't modify further>
 console.log(obj)
 console.log(obj["name"]);
 obj.name="Bera"                           //We try to modify the value of the Name which is already the part of the freeze objects.We can't. 
 console.log(obj["name"])
 console.log(obj)                            //{ name: 'vabataran', [Symbol(Key)]: 'MyKeyValue' } Here mysym is treated as symbol..

  obj.greeting=function(){
      console.log("Hello jsUser i am from greeting")
 }
//console.log(obj.greeting)                   // It will returns [Function (anonymous)]
 console.log(obj.greeting())                  //  Hello jsUser
obj.greeting=function(){
   console.log(`Hlw greetings show all properties of this objects:, ${this.email}`)
   console.log(`Hlw greetings show all properties of this objects:, ${jsUser.email}`)
}
console.log(obj.greeting())      // OUTPUT:(57)Hlw greetings show all properties of this objects:, ranghorai865@gmail.com
//OUTPUT:(58) Hlw greetings show all properties of this objects:, ran@gmail.com


// //                  //PART TWO//

  const tenderUser = new Object()               // This is a singleton objects.
 // console.log(tenderUser)                       // It will returns {}
  const tenderUser1={}                             // This is a non singleton object.
  console.log(tenderUser1)                        // initially it is empty so O/P:{}
 tenderUser.id="123abc"                         //Entries are inserted.
 tenderUser.name="sammy"
 tenderUser.isLoggedIn=true
 console.log(tenderUser)                        //The output will be { id: '123abc', name: 'sammy', isLoggedIn: true }

const facebook={
    email:"ranghorai@gmail.com",
    username:{
        fullname:{
            first_name:"Barun",
            last_name:"Ghorai"
        }
    }
} 
console.log(facebook)
            //O/P:
           //{
           //email: 'ranghorai@gmail.com',
           //username: { fullname: { first_name: 'Barun', last_name: 'Ghorai' } }
            //}
 
 console.log(facebook.username)                         // O/P:{ fullname: { first_name: 'Barun', last_name: 'Ghorai' } }
console.log(facebook.username.fullname)                // O/P: { first_name: 'Barun', last_name: 'Ghorai' }
console.log(facebook.username.fullname.first_name)    //O/P:Barun


const obj1={1:"A",2:"B",3:"C"}
const obj2={4:"D",5:"E",6:"F"}
const obj3={obj1,obj2}               //This construtor method helps to create a new singleton object to combine two singleton objects together
console.log(obj3)
            //O/P:
             //{
             //   obj1: { '1': 'A', '2': 'B', '3': 'C' },
             //   obj2: { '4': 'D', '5': 'E', '6': 'F' }
             // }

 const obj4=Object.assign(obj1,obj2)      //Object.assign returns a value so we have to store it into another variable.
// const obj5=Object.assign({},obj1,obj2)   //{} Optional parameter.all value will be combined.Gurantee for returning of a result
 console.log("obj4=",obj4)                        //  O/P: obj4={ '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }
 
// //Actualy now-a-days we use
 const obj6={...obj1,...obj2}                //This is call Spreading . O/P:{ '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }
 console.log("obj6=",obj6) 


// Objects in array  //
const arr=[                                //Declare array and objects 
    {
        a:"apple",
        b:"Ball"
    },
    {
        c:"Cat",
        d:"Dog"
    },
    {
        e:"Eagle",
        f:"Frog"
    }
]
console.log("From array index 1=",arr[1])                           //{ c: 'Cat', d: 'Dog' }
 console.log(arr[1].d)                         // Dog
 console.log(Object.keys(jsUser))             // Here we can get all the keys of jsUser object's..
//   [
   //   'name',
   //   'full_name',
   //   'age',                            
   //   'phone',                          // But the data type is array ..
   //   'location',
   //   'email',
   //   'isLoggedIn'
//   ]
console.log(Object.keys(arr))                //OUTPUT: [ '0', '1', '2' ]
console.log(Object.values(jsUser))                // Here we can get all the values of jsUser object's..
//   [
     //'amit',
     //'Barun ghorai',
     //20,
     //9854132402,
     //'kgp',
     //'ran@gmail.com',
     //false
//   ]

 console.log("jsUser entries=",Object.entries(jsUser)) 
//   [
//     [ 'name', 'amit' ],
//     [ 'full_name', 'Barun ghorai' ],
//     [ 'age', 20 ],
//     [ 'phone', 9854132402 ],
//     [ 'location', 'kgp' ],
//     [ 'email', 'ran@gmail.com' ],
//     [ 'isLoggedIn', false ]
//   ]
console.log(jsUser.hasOwnProperty('name'))             // O/P:true
console.log(jsUser.hasOwnProperty('name1'))           //O/P:false
 
console.log("Facebool entries=",Object.entries(facebook))     
//OUTPUT:[
//  [ 'email', 'ranghorai@gmail.com' ],
// [ 'username', { fullname: [Object] } ]
//]

                                         ///// PART-3 ////
// Object  De-structure..
const constructor={
    name:"Barun",
    Age:21,
    Roll:4311,
    dept:"cosc"
}
console.log( constructor["name"])                         //)O/P: Barun //This is formal syntax to access the key or value.
console.log( constructor.Age)
console.log( constructor.Roll)                      
console.log(constructor["name"])                     //O/P:Barun

 const {Age}=constructor                              //BY this syntax we can extract the value of Any key's. 
 console.log(Age)                                    //O/P:21

 const {name}=constructor                           //We can avoid repeatation object.key for extracting the values of key's.
 console.log(name)                                   //O/P:Barun

const {name:nm}=constructor                         // We can rename of any key's and use this .
console.log(nm)                                     //O/P:Barun

const {Roll}=constructor
 console.log(Roll)                      //O/P:4311

 const {dept}=constructor
 console.log(dept)


//  JSON API start  
// {                                              // JSON is declare in between { }..
//     "name1":"PraKash",
//     "Roll1":4311,
//     "Title":"Ghorai"
// }
  
// [                                        //JSON is also written like that 
//     {},
//     {},
//     {}
// ]
