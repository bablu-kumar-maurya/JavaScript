// selecting Element 
// getElementById
// return the element as an object or null
// let objimg = console.dir(document.getElementById("mainImg"));


// selecting element
// getElementsByClassName 
// return as an element html collection or empty collection
// let classimg = document.getElementsByClassName("oldImg");
// console.dir(classimg);
// for(i=0;i<classimg.length;i++){
//     console.dir(classimg[i]);
//     console.dir(classimg[i].src);
    // classimg[i].src = "assets/spiderman_img.png";
    // console.log(`every img is changed into spiderman ${i} .`);
// }



// selecting element
// getElementsByTagName
// return as an element html collection or empty collection
// let tagname = document.getElementsByTagName('p');
// console.dir(tagname);
// console.dir(document.getElementsByTagName('p')[1]);
// document.getElementsByTagName('p')[1].innerText = "abc";
 
// Query selector
// allows us to use any css seletor
// console.dir(document.querySelector("p"));  //select only one paragraph
// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelector("div a"));


// using properties and method
// innerText = shows the visival text contained in the node
// innerHTML  = shows the full markup
// textContent = shows all the full text (hidden)
// let para = document.querySelector("p");
// console.dir(para.innerText);
// console.dir(para.innerHTML);
// console.dir(para.textContent);
  

// manupulating attribute
// obj.getAttribute(attr) , obj.setAttribute(attr , val) 
// attr means id class src as like
// let img = document.querySelector('img');
// console.dir(img.getAttribute('id'));
// console.dir(img.setAttribute('id','spiderman'));
 
// manupulating style
// obj.style  // it is only applied in the inline css not applied in the external css
// let head = document.querySelector("h1");
// console.dir(head);
// head.style.color = "red";
// head.style.backgroundColor = "black";
// let links = document.querySelectorAll(".box a");
// for(let i = 0 ; i<links.length;i++){
//     links[i].style.color = "red";
// }

// obj.classlist
// classList.add() add new class
// classlist.remove() remove exsiting class
// classlist.contains() to check if class is exist or not
// classlist.toggle() to toggle between add and remove
//  let headd = document.querySelector("h1");
//  console.dir(headd.classList);
//  headd.classList.add("green");
//  headd.classList.remove("green")
//  headd.classList.contains("green");
//  headd.classList.toggle("green");  jab phle se class exist krega toh remove kr dega jab phle se class 
// exist nahi krega toh add kr dega on/off ka like work krta hai 
// headd.classList.toggle("underline");



// navigation
// parentElement, Children , PreviousElementSibling , NextElementSibling
// let headings = document.querySelector("h4");
// console.dir(headings.parentElement);
// console.dir(headings.children);



// adding element
// document.createElement()
// let para = document.createElement('p');
// console.dir(para);
// para.innerText = "Hi i am here";
// let box = document.querySelector('.box');
// box.appendChild(para);   // append in the last only element 
// para.append(" am i");    // add in the last text or element both are possible 
// para.prepend("add in the prev");
// para.insertAdjacent(where , element) read by chrome
// // remove element
// box.remove("hi i am here");
