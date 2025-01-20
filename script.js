document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contacto__formulario');
    const nameField = form.querySelector('.contacto__campo[type="text"]');
    const emailField = form.querySelector('.contacto__campo[type="email"]');
    const messageField = form.querySelector('.contacto__campo--textarea');
    const submitButton = form.querySelector('.contacto__boton');

    form.addEventListener('submit', function(e) {
        let valid = true;

        // Validar nombre
        if (nameField.value.trim() === '') {
            alert('Por favor, ingresa tu nombre.');
            valid = false;
        }

        // Validar email
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailPattern.test(emailField.value)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            valid = false;
        }

        // Validar mensaje
        if (messageField.value.trim() === '') {
            alert('Por favor, ingresa un mensaje.');
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); // Evita que el formulario se envíe si hay errores
        }
    });
});
