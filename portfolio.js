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

var navlist = document.querySelector(".navlist");
// console.log(navlist);

var flag =0 ;
// navicon.addEventListener("click",function(){
//     if(flag === 0 ){
//         navlist.style.display = "block"; 
//         navlist.style.height = "100%";
//         navlist.style.paddingLeft = "20%";
//         flag =1 ;
//     }
//     else{
//         navlist.style.display = "none";
//         navbar.style.height = "auto"; 
//         flag = 0 ;
//     }
//     // console.log(e);
//     // navbar.style.width = "100vmax";
// })

var navList = document.querySelectorAll(".navlist");
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