let h1 = document.querySelector('h1');
let menuIcon = document.querySelector('.menu-icon');

const iconOpen = './images/icon-hamburger.svg'
const iconClose = './images/icon-close.svg'

//h1.innerHTML = 'IT WORKS';

console.log(menuIcon);

function changeIcon() {
  menuIconSrc = menuIcon.getAttribute('src');
  console.log(menuIconSrc);
  if(menuIconSrc===iconOpen) {
    menuIcon.setAttribute('src', iconClose);
  } else if(menuIconSrc===iconClose) {
    menuIcon.setAttribute('src', iconOpen);
  }
}

menuIcon.addEventListener('click', changeIcon);