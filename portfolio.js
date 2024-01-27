let NavbarIcon = document.querySelector('.navicon')
let navbar = document.querySelector('.navbar')
let navbarList = document.querySelector('#v-nav-resp')
let flag=0
NavbarIcon.addEventListener('click',function(){
    if(flag === 0){
        // console.log(navbarList);
        navbarList.style.opacity='1'
        navbarList.style.backgroundColor = 'white'
        flag=1
    }
    else{
        flag=0
        navbar.style.backgroundColor = 'transparent'
        navbarList.style.opacity='0'
    }
    
})


let inputArea = document.querySelector('.input-tag')
let visitor = document.getElementById('visitor')
let sub = document.getElementsByClassName('sub-btn')
let res = document.getElementsByClassName('reset-btn')
let submit = sub[0]
let reset = res[0]


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