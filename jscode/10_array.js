// //********ARRAY*******//
 let arr=[5,2,8,2,8,9,10]                         // ARRAY should be declare like that
 console.log(arr[2])
 const myArr=["barun","koushik","dipu",1,5,9,]    // There is no restriction for declaration of different types of elements
 console.log(myArr[2]);                           //O/P: dipu
  //we can declare an array like that also                                              
const ar2=new Array(1,8,"barun",100)             
 console.log(ar2[2])                              //O/P: barun

 // All array function properties are in documentation
 console.log(ar2.flat())                          // O/P:[ 1, 8, 'barun', 100 ]
 ar2.push(7)
 console.log(ar2)                                 //O/P:First time push [ 1, 8, 'barun', 100, 7 ]

 ar2.push(0)
 console.log(ar2)                                 // After 2nd time push [ 1, 8, 'barun', 100, 7, 0 ]

 ar2.pop()
 console.log(ar2)                                // After pop ar2 [ 1, 8, 'barun', 100, 7 ]

 ar2.unshift(10)                               //Here  unshift argument will be added into 0th index
 ar2.unshift(20,11,12,17)                        // We can also add multiple element into front of the array like that
 console.log(ar2);                               // O/P:[ 20, 11, 12, 17, 1, 8, 'barun', 100, 7 ]

 ar2.shift()                                    // By shifting we can remove newly added infront element 
 ar2.shift()
 console.log(ar2)                              // O/P:[ 12, 17, 1, 8, 'barun', 100, 7 ]

console.log(ar2.includes(8))                     //By using includes() we can check any element is present in the array or not.O/P:true
console.log(ar2.indexOf(1))                      //By using indexOf we can find the position of the of searching elements..O/P:4

const newar=ar2.join()                           // join() will copy the elements of ar2 array's and paste those into newar array.
console.log(ar2);
console.log(newar)                               //O/P:1,8,barun,100
console.log(typeof(newar))                       // by join() It will converts elements types into string.. 

//**** Use of Slice and Splice ****//

const ar3=ar2.slice(1,3)
console.log(ar3)
console.log("B",ar2)
ar2.push(10)
console.log(ar2)
const ar4=ar2.splice(1,3)                        // It will be delete index 1,2,3 elements from the array
console.log(ar4)                                 // splice elements are  [ 8, 'barun', 100 ]
console.log("C",ar2)                             // C [ 1 ]
console.log(ar2);                                // After splice remaining elements are :[ 1,10 ].. 



