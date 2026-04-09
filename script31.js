// // async function
// async function Greet() {
//     //throw "error";   // return a promise
//     return "hello";   // return a promise
// }
// Greet()
//     .then((result) => {
//         console.log("promise was resolve")
//         console.log("result was = " + result);
//     })
//     .catch((err) => {
//         console.log("promise was reject = " + err);
//     });

// await keyword
// // pause the execution of its surrounding async function untill the promise is settle(resolve or reject)
// function getname() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo() {
//     await getname();
//     await getname();   // console wala me ja ke call krenge demo ko tab print hoga
//     await getname();
//     getname();
// }

// //handling rejection
// function getname() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             if (num > 6) {
//                 reject("reject promises");
//             }
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo() {
//     try {
//         await getname();
//         await getname();
//         await getname();
//         await getname();
//         await getname();
//     }
//   catch(err){
//     console.log("error caught");
//     console.log(err);
//   }
// }

// API = application programming interface
// accessing some API's 
// https://catfact.ninja/fact  (sends some ransom cat facts)
//https://www.boredapi.com/api/activity  (sends an activity to do when bored)

// JSON  = javascript object notation
//accessing data from json
// JSON.parse(data)method = to parse a string data into a js object
// JSON.stringify(json) method = to parse a js object into json

// testing API request
// Hoppacoth
// Postman


// AJAX 
//asynchronous javascript and xml
// http verbs 
// get, post , delete
// status code
// 200 = ok , 404 = error found , 400 = bad request , 500 = internal server request
// Add information in url 
// https://www.google.com/search?q = harry+porter  // q is the key and harry+porter is the value
// ?name=shradha&marks=95
// http headers = header ana value


// our first API request
// let url = "https://catfact.ninja/fact";
//  //fetch(url);
// fetch(url)
// .then((res)=>{
//     console.log(res);
//   console.log(res.json());
// })
// .catch((err)=>{
// console.log("Error" , err);
// });

// our first  REQUEST using fetch with async/await

let url = "https://catfact.ninja/fact";
async function getfacts(){
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json;
        console.log("data", data1);

        let res2 = await fetch(url);
        let data2 = await res2.json;
        console.log("data", data2);
    }
    catch(e){
        console.log("error",e);
    }
}