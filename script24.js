function hello() {
    console.log("hello world");
}

// hello();

function rannum() {
    let ranmnum = Math.floor(Math.random() * 6) + 1;
    console.log(ranmnum);
}

rannum();

function nameInfo(name, age) {
    console.log(`${name} is developer and age is ${age}. `);
}
// nameInfo("bablu",21);

function sum(a, b) {
    console.log(a + b);
}

// sum(2,3);
// sum(34,5);
// sum(5,6);


function avg(a, b, c) {
    let avearge = a + b + c / 3;
    console.log(avearge);
}
// avg(2,3,4);


// let str = ['hi','hello','bye'];
function concat(str) {
    let result = "";
    for (let i = 0; i <= str.length; i++) {
        result += str[i];
    }
    return result;
}
let str = ['hi', 'hello', 'bye'];
// console.log(concat(str));


// lexical scope

function outerfuc() {
    let x = 2;
    let y = 3;
    function innerfuc() {
        console.log(x);
        console.log(y);

    }
    // innerfuc();
}

// outerfuc();


let name = function () {
    console.log("bablu");
}

// name();
 

// higher order function
function multifunction(fuc, count) {
    for (let i = 0; i <= count; i++) {
        console.log(i);
        fuc();
    }
}
let greet = function () {
    console.log("namste");
}
// multifunction(greet,100);

// higher order function


function factory(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    else if (request == "even") {
            let even = function (n) {
                console.log(n % 2 == 0);
            }
            return even;
        }
        else {
         console.log("wrong");
        }
    }


   let request = "odd";

// method when object and function are inclued the generate the method
 let Info = {
    add(a, b) {
        return a + b;
    },
    Sub(a, b) {
        return a - b;
    }, 
    mul(a, b) {
        return a * b;
    }
};


