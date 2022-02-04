var nav = document.querySelector('nav');
var menu = document.querySelector('.navbar-toggler')


menu.onclick = x => {
    if(!nav.classList.contains('bg-info')){
        nav.classList.add('bg-info');
    } else if(nav.classList.contains('bg-info') && window.pageYOffset <= 390){
        nav.classList.remove('bg-info');
    }
}


window.onscroll = str => {
  if(window.pageYOffset > 390){
    nav.classList.add('bg-info', 'shadow');
  }else if(window.pageYOffset <= 390 ) {
    nav.classList.remove('bg-info', 'shadow');
  }
}








const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (elementTop <= window.innerHeight * .9)
};



const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};



window.addEventListener("scroll", () => { 
  // handleScrollAnimation();
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
});
