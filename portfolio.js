let NavbarIcon = document.querySelector('.navicon')
let navbar = document.querySelector('.navbar')
let navbarList = document.querySelector('#v-nav-resp')
NavbarIcon.addEventListener('click',function(){
    console.log(navbarList);
    navbarList.style.opacity='1'
    navbar.style.backgroudColor = 'white'
    navbar.style.float = 'left'
    // navbarList.innerHTML = `<div class="burger">

    //                         </div>`
    // let bug=document.getElementsByClassName('burger')
    // bug[0].style.display = "block"
    // bug[0].style.height = '100px'
    // bug[0].style.width = '100px'
    // bug[0].style.backgroundColor = 'black'
})


let inputArea = document.querySelector('.input-tag')
let visitor = document.getElementById('visitor')
let sub = document.getElementsByClassName('sub-btn')
let res = document.getElementsByClassName('reset-btn')
let submit = sub[0]
let reset = res[0]
let flag=0

submit.addEventListener('click',function(){
    let visitorValue=visitor.value
    if(flag === 0){
        if(visitorValue === null || visitorValue === undefined || visitorValue === '' ||  isNaN(visitorValue) || typeof(visitorValue) === number){
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
            submit.addEventListener('click',come_again())
        }
        flag=1
    }
    else{
        flag=0
        submit.innerHTML = 'Submit'

    }
})
reset.addEventListener('click',come_again())
function come_again(){

}