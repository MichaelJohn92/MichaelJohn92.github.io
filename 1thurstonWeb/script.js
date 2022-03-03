var nav = document.querySelector('#navmenu');
var button = document.querySelector('.navbar-toggler');


button.onclick = x => {
    if(!nav.classList.contains('bg-info1')){
        nav.classList.add('bg-info1');
    } else if(nav.classList.contains('bg-info1')){
        nav.classList.remove('bg-info1');
    }
}


window.onload = initDate;
function initDate() {

     var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
     var now = new Date();
     console.log(now);
     var dtString =  monName[now.getMonth()] +  " " + `${now.getDay()-1}` + ", " + now.getFullYear();
     document.querySelector(".date").innerHTML = dtString;

     if(outerWidth < 576){
        team2.removeChild(container);
        team2.appendChild(container2)
    }else{
        team2.appendChild(container);
        team2.removeChild(container2);
    }
}


var container = document.querySelector('.container-ng-pictures');
var container2 = document.querySelector('.container-ng-pictures2')
var body = document.querySelector('body');
var team2 = document.querySelector('.team-2')



window.onresize = () => {
   

    if(outerWidth < 576){
        team2.removeChild(container);
        team2.appendChild(container2)
    }else{
        team2.appendChild(container);
        team2.removeChild(container2);
    }


}