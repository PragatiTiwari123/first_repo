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

