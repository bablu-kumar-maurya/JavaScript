// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("hello");
// }
// function sayhello(){
//     alert("hello");
// }
// btn.onclick = sayhello;
// let btns = document.querySelectorAll("button");
// console.dir(btns);
// for(btn of btns){
//     // btn.onclick = sayhello;
//     btn.onmouseenter = function(){
//         console.log("buttons");
//     }
// }

//event listener
// let btnn = document.querySelectorAll("button");
// console.dir("btnn");
// for(btn of btnn){
//     btn.addEventListener("click",sayname);
//     btn.addEventListener("click",sayhi);
//     btn.addEventListener("dblclick" ,function(){
//         console.log("good bye");
//     });
// }
// function sayname(){
//     alert("bablu");
// }
// function sayhi(){
//     alert("Hi !");
// }
 

// this in event listener
// when this is use in callback of event handler of something , it refers to that something
// let btn = document.querySelector("button");
// btn.addEventListener("click" , function() {
//     console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
// });

// let inp = document.querySelector("input");
// inp.addEventListener("click" , function(event) {
//     console.log(event);
// });

// inp.addEventListener("keyup" , function() {
//     console.log("key are press");
// })
// inp.addEventListener("keydown" , function(event) {
//     console.log("code = " +event.code);
//     console.log("key = " + event.key);
//      console.log("key are release");
// });

// form event
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();  // iss function ki vajah se dusre page pr  nahi jate hai
//     console.log("hye body");
//     alert("hello");


//     let input = document.querySelector("input");
//     console.log(input);
//     console.dir(input);
//     console.dir(input.value);
// });


// More events 
// change event
// the change event occured when the value of an element has been changed (only works an <input> ,<select> and <textarea> elements)
// input event
// the input event fires when the values of an <input> , <select> and <textarea> element has been changed
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
// });
// form.addEventListener("change" , function() {
//     console.log("change the values");
//     console.log("values is = " +this.value);
// });
// form.addEventListener("input",function(){
//      console.log("fired ");
//      console.log("input = "+this.value);
// });
