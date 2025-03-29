// Check forEach loop returns any value or not
const a=["a","s","r","y"]
const b = a.forEach( (item) => {      // forEach does not return anything .
    console.log(item) 
    //return item               // it will print all entries.
})                                   //  forEach print everything which are in it's scope
console.log(b)                     // undefine

// FOR RETURNING ANYTHING FOR AMY ARRAY WE USE FILTER.
const a1 = [1,2,3,4,5,6,7,8,9]

const b1 = a1.filter( (item) => item >4 )         // we don't need to write return here. HERE scope resolution operator implicitely returns the value and filter support the return value as well.
const b2 = a1.filter( (item) => (item >4) )       // same as line 12
const b3 = a1.filter( (item) => 
 {      
    return (item >4)                            // since we use { } so, we need to write return keyword explicitely.

 }
 )
console.log(b1)                        // [ 5, 6, 7, 8, 9 ]
console.log(b2)                       // [ 5, 6, 7, 8, 9 ]
console.log(b3)                      // [ 5, 6, 7, 8, 9 ]


// As we know forEach does not return anything , but we can explicitely store the elements into a new array from an existing array by using foreach loop
const p=[1,2,3,4,5,6,7,8,9,10]
const s = []
p.forEach( (num) => {
    if( num >6 )
        s.push(num)                         // forEach take all elements and check the condition , condition true then push the element ino empty array vthat is s.
})
console.log(s)                              // [ 7, 8, 9, 10 ]

// DB practice
const books = [
    { title:"one", genre:"M",pub:"2003",edit:"2000"},
    { title:"two", genre:"S",pub:"2002",edit:"2004"},
    { title:"three", genre:"T",pub:"2000",edit:"2010"},
    { title:"four", genre:"H",pub:"1970",edit:"2005"},
    { title:"five", genre:"P",pub:"1994",edit:"2020"},
    { title:"six", genre:"H",pub:"1999",edit:"2021"},
    { title:"seven", genre:"M",pub:"1981",edit:"2022"},
    { title:"eight", genre:"T",pub:"2008",edit:"2024"},
]
// Suppose user wants those books which are equal to H 
let demand = books.filter( (bookName) => (bookName.genre === 'H' ))

console.log(demand)              // We can easily access the value from the array which is contains lot of objects.
//  OUTPUT 
// [
//     { title: 'four', genre: 'H', pub: '1970', edit: '2005' },
//     { title: 'six', genre: 'H', pub: '1989', edit: '2021' }
// ]


//     PRINT ALL THE BOOKS WHICH ARE PUBLISHED AFTER 2000 and BOOKS should be equal to User's choice
// let userChoiceBook ="M"
let choiceBOOK = books.filter( (bk) => {
    
   return bk.genre === "M" && bk.pub >= 2000
})
console.log(choiceBOOK)                            // [ { title: 'one', genre: 'M', pub: '2003', edit: '2000' } ]