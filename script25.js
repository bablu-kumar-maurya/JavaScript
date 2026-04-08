// let info =  {
//   name:"bablu",
//   math: 93,
//   physics: 94,
//   chemistry : 97,
//   info1 (){
//        avg = (this.math+this.physics+this.chemistry)/3
//     console.log(`${this.name} is found total marks is ${avg}`);
//   }
// };

// try and catch
// console.log("hello");
// console.log("hello1");
// try {
//     console.log(a);
// } catch{
//     console.log("a variable is not define");

// }
// console.log("hello2");
// console.log("hello3");

// // arrow function
// let sum  = (a,b) =>{
//     return a+b;
// }

// console.log(sum(2,3));
// let print = () =>{
// console.log("hye americans")
// }
// print();

// let sub = (a,b) => (a-b) ;
// console.log(sub(4,2));
// let pow = (n) =>{
//     return n*n*n;
// }
// console.log(pow(3));

// set time out

// console.log("hi there!");

// setTimeout(() => {
//   console.log("setTimeout is seen after 4 second");
// },4000);
// console.log("welcome");
// setTimeout(() =>{
//     console.log("hello body");
// },6000);

// setInterval
// setInterval (() =>{
//     console.log("the setInterval is executed the every two second agian and again");
// },2000);

// let id = setInterval(() =>{
//     console.log("hello");
// },3000);
// console.log(id);
// clearInterval(id);

// this keyword use in simple function and arrow function

// const  student ={
//     name: "bablu",
//     branch: "cse",
//     roonum: 2104220100043,
//     key: this,
//     getname:function (){
//         console.log(this);
//         console.log(this.name);
//     },

//     setname : ()=>{
//  console.log(this);
//  console.log(this.name);
//     },
//     getinfo : function(){
//         setInterval(() =>{
//             console.log(this);
//             console.log(this.name);
//         },2000);

//     },
//     getonfo1: function(){
//         setInterval(function() {
//             console.log(this);
//             console.log(this.name);
//         },2000)
//     }
// };

