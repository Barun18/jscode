// For of loop 

// Here  don't need to increse or decrease any value of the variable to stop the loop.
// create a for of loop
const arr=[12,4,56,7,2,6]
for (const num of arr) {          // here num is a variable.
    console.log(`Num:${num}`)          //for of read the size of the 
                                 //array and autommeticlly increase it's indx number.
}

// MAP > it is an one kind of object. It contains UNIQUE value as key-pair.
const map=new Map()
map.set("name","barun")
map.set("roll",4311)
map.set("dept","cs")
map.set("College","mndp")
console.log(map)
// OUTPUT 
//Map(4) {                             // RTead the size autometically
//   'name' => 'barun',                 // Value like key and pair 
//   'roll' => 4311,
//   'dept' => 'cs',
//   'College' => 'mndp'
// }

// we can use for of loop on map
for (const key of map) {      
    console.log(key)
}
// OUTPUT
//[ 'name', 'barun' ]
// [ 'roll', 4311 ]
// [ 'dept', 'cs' ]
// [ 'College', 'mndp' ]
for (const [key] of map) {
    console.log(key)
}
// OUTPUT
// name
// roll
// dept
// College

for (const [key,Value] of map) {
    console.log(key,':-',Value)
}
//OUTPUT
// name :- barun
// roll :- 4311
// dept :- cs
// College :- mndp

//Check this for this object for of loop can access the entries or not.
// const map1={
//     myname:"barun",
//     title:"ghorai"
// }
// for (const [key, value] of map1) {                             //Error: map1 is not iterable
//     console.log(key,value)
// }


//  FORIN LOOP USEs to access the key and value for this type of object.
const map2={
    js:"javascript",
    cpp:"C++",
    ruby:"ruby",
    swift:"swift"
}
for (const [key,value] in map2) {
 console.log(key,value)
}
//OUTPUT: 
//j s
//c p
//r u
//s w
for (const key in map2) {
   console.log(map2[key])
}
//OUTPUT
// javascript
// C++
// ruby
// swift
for (const key in map2) {
    console.log(`${key} is the extention of ${map2[key]}`)
 }
 //OUTPUT
//  js is the extention of javascript
// cpp is the extention of C++
// ruby is the extention of ruby
// swift is the extention of swift

// FOR IN IS USED TO CHECK WHETHER ELEMENT OF THE ARRAY IS ACCESSIBLE OR NOT.
const subject=["python","ruby","java","cpp"]
console.log(subject)                              //[ 'python', 'ruby', 'java', 'cpp' ]
for (const key in subject) {
   console.log(key)                               //0 ,1 ,2 ,.3 
}
for (const key in subject) {
    console.log(subject[key])
}  //OUTPUT
// python
// ruby
// java
// cpp

//CHECK ELEMENTS OF MAP OBJECT IS ACCESSIBLE OR NOT BY THE FOR IN LOOP
const mapu=new Map()
map.set("name","barun")
map.set("roll",4311)
map.set("dept","cs")
map.set("College","mndp")

for (const key in mapu) {                          // can't accessable .
   console.log(key)

}

// FOR EACH LOOP

const subject2=["python","ruby","java","cpp"]
//coding.forEach( function name(){ } )    // function creation normal syntax should be modified.

subject2.forEach( function (item){       //This function function () is no name and it is called function callback.
console.log(item)
})                                       
//OUTPUT
// python
// ruby
// java
// cpp

const subject3=["python","ruby","java","cpp"]
subject3.forEach( (i) => {                        //For arrow function syntax is 'variablename = () =>' ,return value have to be stored. But here for callback function no need to store return value. It required just array name. 
    console.log(i)
})//OUTPUT
//python
// ruby
// java
// cpp
console.log("Pass function reference:")
const subject4=["python","ruby","java","cpp"]
function printMe(item){
    console.log(item)
}
subject4.forEach(printMe)                // print all elements.
//subject4.forEach(printMe())            // If we use printMe() then it will through an error.
console.log("ForEach carry not only item it also carries index and full array also.")
subject4.forEach( function (item , index, arr){
console.log(item,index,arr)
})   //OUTPUT
// python 0 [ 'python', 'ruby', 'java', 'cpp' ]
// ruby 1 [ 'python', 'ruby', 'java', 'cpp' ]
// java 2 [ 'python', 'ruby', 'java', 'cpp' ]
// cpp 3 [ 'python', 'ruby', 'java', 'cpp' ]

// now try to access each object from an array.
// suppose array is [ {}, {},{}]
const codingMy=[
    {
        subjectName:"java",
        fileName:"java"
    }, 
    {
        subjectName:"python",
        fileName:"py"
    },
    {
        subjectName:"rubi",
        fileName:"rb"
    },
]
codingMy.forEach( (item) => {         // each item from array is treated an object 
console.log(item.subjectName)        // or can be access item.filename  
})   //OUTPUT
// java
// python
// rubi