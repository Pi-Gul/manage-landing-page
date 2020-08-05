let h1 = document.querySelector('h1');
let menuIcon = document.querySelector('.menu-icon');
let socialIcons = document.querySelectorAll('.social-icon');

const iconOpen = './images/icon-hamburger.svg'
const iconClose = './images/icon-close.svg'

const iconFacebook = './images/icon-facebook.svg'
const iconInstagram = './images/icon-instagram.svg'
const iconPinterest = './images/icon-pinterest.svg'
const iconTwitter = './images/icon-twitter.svg'
const iconYoutube = './images/icon-youtube.svg'

const iconFacebookOrange = './images/icon-facebook-orange.svg'
const iconInstagramOrange = './images/icon-instagram-orange.svg'
const iconPinterestOrange = './images/icon-pinterest-orange.svg'
const iconTwitterOrange = './images/icon-twitter-orange.svg'
const iconYoutubeOrange = './images/icon-youtube-orange.svg'

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

function highlightSocialIcon(ev) {
	if(ev.target.getAttribute('src')===iconFacebook) {
		ev.target.setAttribute('src', iconFacebookOrange);
	} else if(ev.target.getAttribute('src')===iconYoutube) {
		ev.target.setAttribute('src', iconYoutubeOrange);
	} else if(ev.target.getAttribute('src')===iconTwitter) {
		ev.target.setAttribute('src', iconTwitterOrange);
	} else if(ev.target.getAttribute('src')===iconPinterest) {
		ev.target.setAttribute('src', iconPinterestOrange);
	} else if(ev.target.getAttribute('src')===iconInstagram) {
		ev.target.setAttribute('src', iconInstagramOrange);
	} 
}

function resetSocialIcon(ev) {
	if(ev.target.getAttribute('src')===iconFacebookOrange) {
		ev.target.setAttribute('src', iconFacebook);
	} else if(ev.target.getAttribute('src')===iconYoutubeOrange) {
		ev.target.setAttribute('src', iconYoutube);
	} else if(ev.target.getAttribute('src')===iconTwitterOrange) {
		ev.target.setAttribute('src', iconTwitter);
	} else if(ev.target.getAttribute('src')===iconPinterestOrange) {
		ev.target.setAttribute('src', iconPinterest);
	} else if(ev.target.getAttribute('src')===iconInstagramOrange) {
		ev.target.setAttribute('src', iconInstagram);
	}
}

for (let i=0; i < socialIcons.length; i++) {
	socialIcons[i].addEventListener('mouseover', highlightSocialIcon);
	socialIcons[i].addEventListener('mouseout', resetSocialIcon);
}