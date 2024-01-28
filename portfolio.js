let NavbarIcon = document.querySelector('.navicon')
let remIcon = document.querySelector('.rem')
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
remIcon.addEventListener('click',function(){
    navbar.style.backgroundColor = 'transparent'
    navbarList.style.opacity='0'
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
        if(visitorValue === null || visitorValue === undefined || visitorValue === ''){
            // console.log(visitorValue);
            inputArea.innerHTML =  `<div>
                                        Wrong INput please write your name properly
                                    </div>`
            submit.innerHTML = 'Want to submit again'
            reset.style.opacity = '0'
            console.log("execute");
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
            reset.style.opacity = '0'
            console.log("execute 1");
        }
        flag=1
    }
    else{
        // console.log("execute 2");
        // inputArea.innerHTML =`<div class="input-tag">
        //                         <input type="text" id="visitor" placeholder="Enter your name">
        //                         <input type="text" placeholder="Enter your mail">
        //                         <input type="text" placeholder="Enter the topic">
        //                         <input type="text" placeholder="Leave your thought">
        //                      </div>`
        flag=0
        submit.innerHTML = 'Submit'
        reset.style.opacity = '1'
    }
})
reset.addEventListener('click',function(){
    inputArea.innerHTML =`<div class="input-tag">
                            <input type="text" id="visitor" placeholder="Enter your name">
                            <input type="text" placeholder="Enter your mail">
                            <input type="text" placeholder="Enter the topic">
                            <input type="text" placeholder="Leave your thought">
                        </div>`
})