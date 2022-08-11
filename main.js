const btnToggleNav = document.querySelector('.nav-open-btn');
const btnCloseNav = document.querySelector('.nav-close-btn');
const navMenu = document.querySelector('.desktop-nav');


btnToggleNav.addEventListener('click', showHideNav);
btnCloseNav.addEventListener('click', showHideNav);

function showHideNav() {
    if(navMenu.classList.contains('mobile-nav')) {
        navMenu.classList.remove('mobile-nav');
        return;
    }
    if(!navMenu.classList.contains('mobile-nav')) {
        navMenu.classList.add('mobile-nav');
    }
}


