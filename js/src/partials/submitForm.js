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