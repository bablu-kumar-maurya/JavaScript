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

// let arr = [2,3,4,5];
// arr.forEach(function(val , index){
// console.log(val +" " + index + " ");
// });


// map method
// create a new array
// let nums = [1, 2, 3, 4];
// let newNums = nums.map((num) => {
//     return num * 2;
// });
// console.log(newNums);
// output  = [2,4,6,8]



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
// // reduce method in javascript is convert an array into a single value 
// let nums = [1,2,3,4];
// let finalvalue = nums.reduce((num1 , num2)=>{
    // return num1+num2;
    // });
// console.log(finalvalues);


// default method
// function sum(a,b=2){
//     return a+b;
// }
// console.log(sum(4));


// // spread
// The spread operator (...) is used to expand or unpack values from an array, object, or string.

// let arr = [1, 2, 3];
// console.log(...arr);  // output 1 2 3

// let a = [1, 2];
// let b = [3, 4];
// let c = [...a, ...b];
// console.log(c);    // o/p. [1,2,3,4]

// let name = "bablu";
// let arr = [...name];
// console.log(arr);  // o/p ['b','a','b','l','u']

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
// Destructuring is a way to extract values from arrays or objects and store them in variables easily.
// let namess = ["bablu","Ajay","Dipu","Gobind","Vijay","Sandip","Pradip","Dhanjay"];
// let numbers = [12,3,4,4,5,6];
// let [a,b,c,d , ...rest] = numbers;  // rest oparator is used to store the remaining element in the array in the form of array
// console.log(a ,b ,c, d ,rest);

// / let numbers = [12,3,4,4,5,6];
// let [a, , ,d, ...rest] = numbers;  // rest oparator is used to store the remaining element in the array in the form of array
// console.log(a , d ,rest);
// let[vfvf,other,...nam] = namess;


// let object ={
//     name:"jfv", 
//     password:123,
//     email:"bablu@2123",
//     class:12
// }
// let{name,email} = object;
// console.log(name);

// console.log(gmail);


