// let arr = [{
//     name: "bablu",
//     marks: 72,
// }, {
//     name: "dipu",
//     marks: 82,
// }, {
//     name: "ajay",
//     marks: 79
// }];

// foreach method

 
// let print = function(arr){
//     console.log(arr);
// }
// arr.forEach(print);

// or

// arr.forEach(function(arr){
//       console.log(arr);
// });


// map method
// create a new array
// let double = arr.map (function(el){
//    return el.marks/3;
// });
// console.log(double);


// filter = add in the array only true value
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let values = arr1.filter(function(arr1){
//     return arr1 % 2 == 0 ;
// })
// console.log(values);


// every function 
// return true if every element of array gives true for some function . Else returns false
// basically its return true or false
// let values1 = [13,5,7,9,13].every(function(el){
// return el%2!=0;
// }
// );
// console.log(values1);
 
// reduce method
// reduces the array in the single value basically its return true or false  
// let nums = [1,2,3,4];
// let finalvalues = nums.reduce((res,el) => (res+el));
// console.log(finalvalues);

// default method

// function sum(a,b=2){
//     return a+b;
// }
// console.log(sum(4));

// // spread

let arr4 = [1,2,3,4,3,2,4,5,6];
let min = Math.min(arr4);
 console.log(min);
//  let min1 = Math.min(...arr4);
//  console.log(min1);
//  console.log(...arr4);
// let arr10 = [..."bablukumar"];
//  console.log(arr10);  // o/p['b'a'b'l'u'k'u'm'a'r']

//  let obj1 = {
//     compiler : 76,
//     datamanagement : 98
//  }
//  console.log(...obj1 ,  machine :98);

// // rest
// allow the function to take an infinite number of arguments and bundle them in the array
// function sum(...args){
//     return args.reduce((sum,el) => sum+el);
// }

// destructuring 
// storing values of array into multiple variable
// let namess = ["bablu","Ajay","Dipu","Gobind","Vijay","Sandip","Pradip","Dhanjay"];

// let[vfvf,other,...nam] = namess;

// object

// let object ={
//     name:"jfv", 
//     password:123,
//     email:"bablu@2123",
//     class:12
// }
// let{name,email:gmail} = object;
// console.log(name);

// console.log(gmail);