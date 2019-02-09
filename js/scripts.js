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
        body.style = 'scroll';
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
menuItem.forEach(function (elem) {
    elem.addEventListener("click", closeMenu);
});
function submitForm(e, form){
    e.preventDefault();

    var url = window.location.href;

    fetch(url)
        .then(function (response) {
            var dataForm = {
                name: form.formName.value,
                email: form.formEmail.value,
                phone: form.formPhone.value,
                city: form.formCity.value,
                message: form.formMessage.value,
            };
            console.log(`Имя: ${dataForm.name} \n` +
                         `Email: ${dataForm.email} \n` +
                         `Phone: ${dataForm.phone}\n` +
                         `City: ${dataForm.city} \n` +
                         `Message: ${dataForm.message}`)
        })
        .catch(function (error) {
            console.error(error)
        })
}