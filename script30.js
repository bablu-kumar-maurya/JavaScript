 // breakpoints
  function one(){
    return 1;
}
function two(){
    return one() + one();
}

function three(){
    let ans = two() +one();
    console.log(ans);
}

three();

// js is single thread
let a = 10;
console.log(a);
let b = 29;
console.log(b);
console.log(a+b);



// callbackhell
let h = document.querySelector("h1");
function changecolor(color, delay, nextcolorchange) {
    setTimeout(() => {
        h.style.color = color;
        nextcolorchange();
    }, delay);
}
changecolor("blue", 1000, () => {
    changecolor("yello", 1000, () => {
        changecolor("red" ,1000 , ()=>{
        });
    });
});


//

function savetoDb(data, success, failure) {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
        success();
    }
    else {
        failure();
    }
}
savetoDb("apna college",
    () => {
        console.log("success your data was saved")
        savetoDb("hello",
            () => {
                console.log("success 2 your data saved");
                savetoDb("hi",
                    () => {
                        console.log("success 3 your data was saevd");
                    },
                    () => {
                        console.log("failure 3 your data was not saved");
                    }
                )
            },
            () => {
                console.log("failure2 your data was not saved");
            }
        )
    },
    () => {
        console.log("failure your data was saved");
    }
);

function savetoDb(data) {
    return new Promise((resolve , reject) =>{
        let internetspeed = Math.floor(Math.random() * 10) + 1;
        if (internetspeed > 4) {
            resolve("success your data was saved");
        }
        else {
            reject("failure your data was nat saved");
        }
    });
    }

   let request =  savetoDb("apna college");
   console.log(request);
 

// then and catch method
savetoDb("apna college").
then(()=>{
    console.log("promise was are resolved");
})
.catch(() =>{
    console.log("promise was reject");
});
   

// promise chaning 
savetoDb("apna college")
.then(()=>{
    console.log("data1 saved");
    return savetoDb("hello");
})
.then(()=>{
    console.log("data2 saved");
    return savetoDb("Hi peter");
})
.then(()=>{
    console.log("data3 saved");
})
.catch(()=>{
    console.log("failure the data not saved");
});


savetoDb("apna college")
.then((result)=>{
    console.log("data1 saved");
    console.log("results are", result);
    return savetoDb("hello");
})
.then((result)=>{
    console.log("data2 saved");
    console.log("results are", result);
})
.catch((error)=>{
    console.log("data was not saved");
    console.log("error are = ", error);
});