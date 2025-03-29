//*******Date and Time*****/

let myDate=new Date()
console.log(myDate)                         //2024-02-19T07:30:44.216Z  .----Z is non understanding(It indicates miliseconds value)
console.log(myDate.toString())              //Now output will be like that::  Mon Feb 19 2024 13:04:25 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())          // This will returns only current date ::Mon Feb 19 2024
console.log(myDate.toISOString())           //2024-02-19T07:37:54.611Z
console.log(myDate.toJSON())                //toJson() returns same output like toISOString()
console.log(myDate.toLocaleDateString())    //This will returns like:: 19/2/2024
console.log(myDate.toLocaleString())        //This will returns like::19/2/2024, 1:12:49 pm
console.log(myDate.toLocaleTimeString())    //This will returns like ::1:13:40 pm
console.log(typeof(myDate))                 // date is an Object

let createdDate=new Date(2002,9,3)          // month name index number starts from 0.
console.log(createdDate.toDateString())     // Thu oct 03 2002
let createDate2=new Date("2002-10-3")        // The output Syntax will be yy-mm-dd
console.log(createDate2.toLocaleString())    //  3/10/2002, 12:00:00 am

let createDate3=new Date("03-15-2002")       //This will returns 10/3/2002, 12:00:00 am
console.log(createDate3.toLocaleString())    //Syntax type mm-dd-yy

let myTimeStamp=Date.now()
console.log(myTimeStamp)                      //1708405296961 --Date is shown as mili second
console.log(Date.now())                       //Date.now() returns value in milisecond
console.log(typeof(myTimeStamp))              //Number    
console.log(createDate2.getTime())              //1033583400000
console.log(Date.now()/1000)                     //smaller value as compare to the default value  o/p:1729085210.87
console.log(Math.floor(Date.now()/1000))        // Here we just avoid decimal value  o/p:1729085210

let newDate=new Date()
console.log(newDate)                          // o/p:2024-02-20T05:27:50.232Z
console.log(newDate.getDay())                 // day will be printed as number like 2 or 3 or so on ..Here always week starts from monday
console.log(newDate.getFullYear())            //O/P:2024
console.log(newDate.getHours())               //O/P:11  (train time)
console.log(newDate.getMinutes())             //O/P:2
console.log(newDate.getMonth())               // O/P:9   (month index start from 0)
console.log(newDate.getTime())                //O/P:1708407159950
console.log(newDate.getUTCMonth())            //O/P:1
console.log(newDate.getTimezoneOffset())      //O/P:-330


