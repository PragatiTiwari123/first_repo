// var main = document.querySelector("#main");
// var cursor = document.querySelector(".cursor");
// // console.log(main);
// main.addEventListener("mousemove",function(e){
//     // console.log("Hye");
//     cursor.style.left = e.x + "px"; 
//     cursor.style.top = e.y + "px";
// })

var navbar = document.querySelector(".navbar");

var navicon = document.querySelector(".navicon");

var vresp = document.querySelector("#v-nav-resp");
// console.log(navlist);
var navList = document.querySelectorAll(".navlist");

var flag =0 ;
navicon.addEventListener("click",function(e){
    // navbar.classList.toggle('v-nav-resp')
    // vresp.classList.toggle('.navlist')
    // console.log(e);
})


// console.log(navList);
// console.log(navList.children);
navList.forEach(function(e){
    Array.from(e.children).forEach(function(e1){
        // console.log(e1);
        // e1.addEventListener('click',function(){
        //     e1.style.color = "green" 
        // })
    })
})

let inputArea = document.querySelector('.input-tag')
let visitor = document.getElementById('visitor')
let sub = document.getElementsByClassName('sub-btn')
let res = document.getElementsByClassName('reset-btn')
// console.log(sub[0]);
// sub.preventDefault()
let submit = sub[0]
let reset = res[0]
console.log(reset);
// submit.preventdefault()
submit.addEventListener('click',function(){
    let visitorValue=visitor.value
    // console.log(visitorValue);
    let flag=0
    if(flag === 0){
        if(visitorValue === null || visitorValue === undefined){
            // console.log(visitorValue);
            inputArea.innerHTML =  `<div>
                                        Wrong INput please write your name properly
                                    </div>`
        }
        else{
            console.log(visitorValue);
            inputArea.innerHTML =  `<div>
                                        ${visitorValue} 🖤 Thankyou for ur valuable time..
                                    </div>`
            inputArea.style.fontWeight = '900'
            inputArea.style.fontSize = '5vw' 

        }
        flag=1
    }
    else{
        flag=0
    }
})