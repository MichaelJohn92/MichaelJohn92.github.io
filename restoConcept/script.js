let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active')
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
  cartItem.classList.toggle('active')
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

const img2 = document.querySelector('.mainImg2');
const img3 = document.querySelector('.mainImg3');
document.querySelector('.mainImg').onclick = () => document.querySelector('.mainImg').src = './images/b.jpg'

img3.addEventListener('click', ()=> document.querySelector('.mainImg').src = img3.src);

img2.addEventListener('click', ()=> document.querySelector('.mainImg').src = img2.src);
function changeImg(path){
  document.querySelector('.mainImg').src = path;
}

