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