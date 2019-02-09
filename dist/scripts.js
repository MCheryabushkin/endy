"use strict";

var menuCounter = 0,
    menuToggle = document.querySelector('.header__menu-mobile'),
    menu = document.querySelector('.menu-mobile'),
    menuItem = menu.querySelectorAll('a');

var openMenu = function openMenu() {
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

var closeMenu = function closeMenu() {
  var body = document.querySelector('body');
  menu.style.left = -9999 + 'px';
  body.style.overflow = 'scroll';
  menuToggle.classList.remove('opened');
  menuCounter = 0;
};

menuToggle.addEventListener("click", openMenu);

for (var i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", closeMenu);
}

function submitForm(e, form) {
  e.preventDefault();
  var url = window.location.href,
      modal = document.querySelector('.modal');
  var errorBox = document.querySelector('.js_error-text');

  if (form.formName.value === "" || form.formEmail.value === "") {
    errorBox.textContent = "Заполните Имя и Email";
  } else {
    if (typeof fetch !== 'undefined') {
      fetch(url).then(function (response) {
        var dataForm = {
          name: form.formName.value,
          email: form.formEmail.value,
          phone: form.formPhone.value,
          city: form.formCity.value,
          message: form.formMessage.value
        };
        console.log("\u0418\u043C\u044F: ".concat(dataForm.name, " \n") + "Email: ".concat(dataForm.email, " \n") + "Phone: ".concat(dataForm.phone, "\n") + "City: ".concat(dataForm.city, " \n") + "Message: ".concat(dataForm.message));
        modal.classList.add('show');
        setTimeout(function () {
          modal.classList.remove('show');
        }, 3000);
        clearForm();
      }).catch(function (error) {
        console.error(error);
      });
    } else {
      errorBox.style.position = 'relative';
      errorBox.style.maxWidth = '280px';
      errorBox.textContent = 'Скорее всего вы используете IE. Для отправки формы, пожалуйста, смените браузер :)';
    }
  }
}

var clearForm = function clearForm() {
  var errorBox = document.querySelector('.js_error-text');
  var input = document.querySelectorAll('input[type="text"]');
  input.forEach(function (elem) {
    return elem.value = "";
  });
  errorBox.textContent = "";
};