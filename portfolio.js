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
// let flag=0
// console.log(reset);
// submit.preventdefault()
submit.addEventListener('click',function(){
    let visitorValue=visitor.value
    // console.log(visitorValue);

    if(flag === 0){
        if(visitorValue === null || visitorValue === undefined || visitorValue === ''){
            // console.log(visitorValue);
            inputArea.innerHTML =  `<div>
                                        Wrong INput please write your name properly
                                    </div>`
            submit.innerHTML = 'Want to submit again'
            reset.style.display = 'none'
        }
        else{
            // console.log(visitorValue);
            inputArea.innerHTML =  `<div class="new">
                                        ${visitorValue} 🖤 Thankyou for ur valuable time..
                                    </div>
                                    <div>
                                        Your kindness has not gone unnoticed, and I am truly grateful for ur feedback. Your support means a lot to me
                                    </div>`
            let imp = document.getElementsByClassName('new')
            imp[0].style.fontWeight = '900'
            imp[0].style.fontSize = '3.18vw' 
            submit.innerHTML = 'Want to submit again'
            reset.style.display = 'none'
        }
        flag=1
    }
    else{
        flag=0
        submit.innerHTML = 'Submit'

    }
})
reset.addEventListener('click',function(){})
function come_again(){

}