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
function submitForm(e, form){
    e.preventDefault();

    var url = window.location.href,
        modal = document.querySelector('.modal');
    const errorBox = document.querySelector('.js_error-text');

    if (form.formName.value === "" || form.formEmail.value === "") {
        errorBox.textContent = "Заполните Имя и Email";
    } else {

        if (typeof(fetch) !== 'undefined') {
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
                        `Message: ${dataForm.message}`);
                    modal.classList.add('show');
                    setTimeout(function () {
                        modal.classList.remove('show');
                    }, 3000);
                    clearForm();
                })
                .catch(function (error) {
                    console.error(error)
                })
        } else {
            errorBox.style.position = 'relative';
            errorBox.style.maxWidth = '280px';
            errorBox.textContent = 'Скорее всего вы используете IE. Для отправки формы, пожалуйста, смените браузер :)';
        }

    }
}

const clearForm = () => {
    const errorBox = document.querySelector('.js_error-text');
    const input = document.querySelectorAll('input[type="text"]');
    input.forEach(elem => elem.value = "");
    errorBox.textContent = "";
};