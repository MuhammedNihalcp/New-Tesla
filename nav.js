//  const openMenu = () => {
//     document.querySelector('.backdrop').className = 'backdrop active';
//     document.querySelector('aside').className = 'active';
// }

// const closeMenu = () => {
//     document.querySelector('backdrop').className = 'backdrop';
//     document.querySelector('aside').className = '';
// }

// document.getElementById('menu').onclick = e => {
//     e.preventDefult();
//     openMenu();

// }
// document.querySelector('aside button.close').onclick = e => {
//     closeMenu();
// }
// document.querySelector('backdrop').onclick = e => {
//     closeMenu();
// }

const but = document.getElementById("menu");
const aside = document.getElementById("as");
aside.style.display = "none";
const close = document.getElementById("close");
const drop = document.getElementById("blur");
drop.style.display="none";

drop.style.display="none";
visible= function () {
      aside.style.display = "block";
    //   drop.style.display="block";
    
};

hide= function(){
    aside.style.display = "none";
    // drop.style.display="none";
}

// const drop = document.getElementsByClassName("backdrop");

// blar= function(){
//     if( aside.style.display =="block"){
//         drop.style.display="block";
//     }else{
//         drop.style.display="none"; 
//     }
// }




