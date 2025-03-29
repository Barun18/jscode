//Lets start the code
const accountId=122
// accountId=3              //not allowed ..Constant value not be changed
console.log(accountId);

let accountEmail="barun@gmail.com"
var accountPassward="123"           /*
                                       now a days var is not used 
                                       because of issue in block scope and funtional scope 
                                    */
accountCity="kgp"                  //can be use a variable like this.But this is not good practie 
console.log(accountEmail)
console.log(accountPassward)
accountEmail="abc@gmail"    
console.log(accountEmail)
let accountState                  //javascript shows undefined in output.

  // Now we can see all data that are stored into the variable by tabuler form
  // Use console.table and pass all variable between square bracket                              
console.table([accountId,accountEmail,accountPassward,accountCity,accountState])
