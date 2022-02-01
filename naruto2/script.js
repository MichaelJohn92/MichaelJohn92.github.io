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
        text.style.left = 50 + value*.5+'%';
        // text.style.display = 'none';
    }else{
        text.style.left = 8+ value*.3+'%';
        // text.style.display = 'block';
    }
    menuList.classList.remove('active');
    // console.log(window.innerWidth, window.outerWidth);
    // console.log('hello!');
    // console.log(value);
    
    // if(window.innerWidth > window.outerWidth + 100){
        //     console.log('hehe');
        //     // text.style.display = 'none';
        // }
        // console.log(window.innerWidth, window.outerWidth)
        // if(window.innerWidth = window.outerWidth){
            //     console.log('haha');
            //     text.style.display = 'inline';
            // }
            // let badi = document.querySelector('.container');

        // if(badi.scrollLeft() !== 0){
        //     badi.scrollLeft(0);
        // }
        // window.scrollTo(0, window.scrollX)
        });
        
        // $(function(){
        //     var $body = $(document);
        //     $body.bind('scroll', function(){
        //         if($body.scrollLeft() !== 0){
        //             $body.scrollLeft(0);
        //         }
        //     })
        // })
        
menuBtn.addEventListener('click', ()=> {
    menuList.classList.toggle('active');
})






// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//     document.querySelectorAll('*'),
//     function(el){
//         if(el.offsetWidth > docWidth){
//             console.log(el);
//         }
//     }
// );


// var outer = window.outerWidth;
// let cont = document.querySelector('.container');


// (function () { console.log(cont, outer); })();

// var scrollEventHandler = function(){
//     window.scroll(0, window.pageXOffset)
//     console.log('fuck you')
// }
// window.addEventListener('scroll', scrollEventHandler, false);