// var header = document.querySelectorAll('a');
// header.addEventListener('click',function aaa(){
//   alert('yow');
// });

// //////////////////////////////////////////////////////////
// var i = 0;
// var arr = ["./images/nightText.png", "./images/stripes.png", "./images/night.png"];
//   function left(){
//     // var images[0] = "./images/grunge.png";
//     // var images[1] = "./images/nightText.png";
// if(i==3) i -= 3;
//   document.querySelector('.night').src = arr[i];
//   ++i;
// // }else{
// //   document.querySelector('.night').src = arr[i];
// //   // "./images/nightText.png" ;
// //   ++i;
// }
//
// function right(){
//   if(i==1) i += 1;
//     document.querySelector('.night').src = arr[i];
//     // --i;
//   // }else{
//   //   document.querySelector('.night').src = arr[i];
//   //   // "./images/nightText.png" ;
//   //   --i;
// }
// ///////////////////////////////////////////////////////////
var night = document.querySelector('.night');
var i = 2;
var arr = ["./images/v1.png", "./images/v2.png", "./images/night2.png"];
// document.querySelector('.night').src = arr[i];
night.src = arr[i];

function right(){
  ++i;
  if(i>2) i=0;
  document.querySelector('.night').src = arr[i];
  // console.log(i);
}


function left(){
  --i;
  if(i<0) i=2;
  document.querySelector('.night').src = arr[i];
  // console.log(i, night);
}


const angle = document.querySelector('.angle');
angle.addEventListener('click', ()=>{
  if(i == 0 && window.outerWidth > 520){
    night.style.width = '32%';
    night.style.right = '12%';
    night.style.bottom = '-25%';
  } else if (i==0 && window.outerWidth <= 520){
    night.style.width = '50%';
    night.style.bottom = '-15%';
    night.style.right = '23%';
  }

  console.log(window.outerWidth);

  if(i == 1 && window.outerWidth > 520){
    night.style.width = '30%';
    night.style.right = '12%';
    night.style.bottom = '0%';
  }else if(i == 1 && window.outerWidth <= 520){
    night.style.width = '50%';
    night.style.bottom='0%';
  }

  if(i == 2 && window.outerWidth > 520){
    night.style.width = '55%';
    night.style.right = '7%';
    night.style.bottom = '0';
  } else if ( i == 2 && window.outerWidth <= 520){
    night.style.width = '85%';
    night.style.right = '10%';
    night.style.bottom = '0';
  }
})

window.onresize = () =>{

  if(i == 0 && window.outerWidth > 520){
    night.style.width = '32%';
    night.style.right = '12%';
    night.style.bottom = '-25%';
  } else if (i==0 && window.outerWidth <= 520){
    night.style.width = '50%';
    night.style.bottom = '-15%';
    night.style.right = '23%';
  }

  if(i == 1 && window.outerWidth > 520){
    night.style.width = '30%';
    night.style.right = '12%';
    night.style.bottom = '0%';
  }else if(i == 1 && window.outerWidth <= 520){
    night.style.width = '50%';
    night.style.bottom='0%';
  }
  console.log(window.outerWidth);

  if(i == 2 && window.outerWidth > 520){
    night.style.width = '55%';
    night.style.right = '7%';
    night.style.bottom = '0';
  } else if ( i == 2 && window.outerWidth <= 520){
    night.style.width = '85%';
    night.style.right = '10%';
    night.style.bottom = '0';
  }

  // if(window.outerWidth > 520){
  //   j=1;
  //  menuUl.style.opacity = 1;
  // }else{
  //   j=0;
  //  menuUl.style.opacity = 0;
  // }

}




//orig
// var menuList = document.querySelector(".menulist");
// menuList.style.maxHeight = "140px";
// function toggleMenu(){
//   if( menuList.style.maxHeight == "140px"){
//     menuList.style.maxHeight = "0px";
//   }
//   else{
//     menuList.style.maxHeight = "140px";
//   }
//   // var cont = document.querySelector('body');
//   // console.log(cont.width);
// }
//
var menulist = document.querySelector('.menuBtn');
var menuUl = document.querySelector('.menu ul');
var j = 0;
//should be menulist but this is what's already declared in css.
menulist.addEventListener('click', toggleMenu);
function toggleMenu(){
  if(j==0){
    menuUl.style.right = '2%';
    ++j;
  } else{
    menuUl.style.right = '-40%';
    --j;
  }

//     function toggleMenu(){
//   if(j==0 && window.outerWidth <= 520){
//     menuUl.style.opacity = 1;
//     ++j;
//   } else{
//     menuUl.style.opacity = 0;
//     --j;
//   }

// }


// window.onresize = () => {
//  if(window.outerWidth > 520){
//    j=1;
//   menuUl.style.opacity = 1;
//  }else{
//    j=0;
//   menuUl.style.opacity = 0;
//  }

}
