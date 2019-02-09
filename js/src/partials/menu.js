var menuCounter = 0,
    menuToggle = document.querySelector('.header__menu-mobile'),
    menu = document.querySelector('.menu-mobile'),
    menuItem = menu.querySelectorAll('a');


var openMenu = function () {
    var body = document.querySelector('body');
    if (!menuCounter) {
        menu.style.left = 0 + 'px';
        body.style.overflow = 'hidden';
        menuToggle.classList.add('opened');
        menuCounter = 1;
    } else {
        menu.style.left = -9999 + 'px';
        body.style.overflow = 'scroll';
        menuToggle.classList.remove('opened');
        menuCounter = 0;
    }
};
var closeMenu = function () {
    var body = document.querySelector('body');
    menu.style.left = -9999 + 'px';
    body.style.overflow = 'scroll';
    menuToggle.classList.remove('opened');
    menuCounter = 0;
};

menuToggle.addEventListener("click", openMenu);
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", closeMenu);
}