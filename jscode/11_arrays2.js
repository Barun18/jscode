// ARRAy PART 2
const marvel_heros2=['thor','spider man','iron man']
//console.log(marvel_heros2)
const dc_heros2=['superman','flash','bat man']
//console.log(dc_heros2)
//marvel_heros2.push(dc_heros2)
//console.log(marvel_heros2)                   //[ 'thor', 'spider man', 'iron man', [ 'sperman', 'flash', 'bat man' ] ] 

all_heros=marvel_heros2.concat(dc_heros2)                        
//console.log(all_heros)                        //[ 'thor', 'spider man', 'iron man', 'superman', 'flash', 'bat man' ]
new_heros=[...marvel_heros2,...dc_heros2]     // spread : More than one array can be sread by sread operation. But CONCAT   
console.log(new_heros)         // function just allow the one argument to concat OUTPUT:using spread:[ 'thor', 'spider man', 'iron man', 'superman', 'flash', 'bat man' ]
// Flat()

new_all=[1,5,7,[1,4,9],3,[[1,5],8,10],14]
console.log(new_all.flat(Infinity))          //show all the elements in a single array:[1,5,7,1,4,9,3,1,5,8,10,14]
                                             //Without Infnity output will be [1,5,7,3,[1,5],8,10,14]
//Check element present or not:
console.log(Array.isArray("thor"))           //false
console.log(Array.from("barun"))             //[ 'b', 'a', 'r', 'u', 'n' ]
console.log(Array.from("123456789"))           //['1','2','3','4','5','6','7','8','9']  
// create arrays from keys
console.log(Array.from({name:"apple"}))        //It will return [] cause it is not clear what should be converted to an array either key or value.   

// create an array from diff. variable
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))    //[ 100, 200, 300 ]