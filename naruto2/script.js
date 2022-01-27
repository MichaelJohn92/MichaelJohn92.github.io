let text = document.querySelector('.text');
let menuBtn = document.querySelector('.fas.fa-bars.menuBtn')
let menuList = document.querySelector('.menuList');


window.onresize = ()=>{
    if(window.outerWidth <=520){
        text.style.left = 50 + '%';
    }else{
    text.style.left = 8 +'%';
    }
}

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    if(window.outerWidth <=520){
        text.style.left = 50 + value*.3+'%';
    }else{
    text.style.left = 8+ value*.3+'%';
    }
    menuList.classList.remove('active');
    // console.log(window.innerWidth);
    // console.log(window)
})


menuBtn.addEventListener('click', ()=> {
    menuList.classList.toggle('active');
})


