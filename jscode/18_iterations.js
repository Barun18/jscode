//for loop
for (let i = 0; i < 10; i++) {
    const element = i
    //console.log(element)              // 0 - 9 will be printed.
}
for (let i = 0; i < 5; i++) {
    //console.log("outer value:",i)           //execute first for one time for distinct i's value then go to inner loop
    for (let j = 0; j < 5; j++) {
        //console.log("Inner value:",j)       //Execute till inner loop condition is false.Then go to outer loop
    }
   
}
for (let i = 1; i <=5; i++) {
for (let j = 1; j <=5 ; j++) {               
    console.log(`${i}`+"*"+`${j}`+"=" ,i*j)      // Number table will be printed.
}   
}
const myArr=["sanchayita","barun","adrija","anjana"]
console.log(myArr.length)
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
}
//BREAK and CONTINUE
for (let i = 1; i <=20; i++) {
    if(i==5){
    console.log("5 is detected")              // break keyword immediatly stop the iteration of the loop and exit from loop.
    break
    }
    console.log(i) 
}
 
for (let i = 1; i <=20; i++) {
    if(i==5){                          
    console.log("5 is detected")
    continue                      //It will skip the the current iteration and go to the next iterataion.
    }
    console.log(i) 
}

//WHILE LOOP

let index=0
while(index <= 10){
    console.log(`Value of index is:${index}`)
    index= index +2
}
let ar=["p","b","s","a"]
i=0
while( i <=ar.length){
    console.log(`Your current element is:${ar[i]}`)
    i=i + 1
}
// DO WHILE LOOP

let arr=2
do {
    console.log(`Your value is:${arr}`)
    arr = arr+2
}while(arr<=12);


