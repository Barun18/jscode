//IIFE-Immediately Invoked Function Expression.
//It also prevent the access of global polution i.e prevent to access the global value.
//create a iife:  ()()
(function funiife(){
console.log(`DB CONNECTED.`)
})();


// check arrow function(() =>) supports iife or not?
((name) =>{
console.log(`${name},it is 2nd iife from arrrow function.`)
})('barun')  ;      //here we can pass argument. 