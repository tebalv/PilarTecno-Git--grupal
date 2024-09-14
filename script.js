document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const formContainer = document.querySelector('.form-container');

    // Muestra el contenedor del formulario con una transición
    formContainer.classList.add('show');

    // Maneja el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío real del formulario para efectos de demostración

        // Crea un mensaje de éxito
        const message = document.createElement('div');
        message.className = 'success-message';
        message.textContent = '¡Formulario enviado exitosamente!';
        formContainer.appendChild(message);

        // Oculta el mensaje después de 3 segundos
        setTimeout(() => {
            message.style.opacity = 0;
            setTimeout(() => {
                formContainer.removeChild(message);
            }, 500); // Espera a que la transición de opacidad termine
        }, 3000);
    });

    // Validación dinámica de campos
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.style.borderColor = '#28a745'; // Verde para válido
            } else {
                this.style.borderColor = '#dc3545'; // Rojo para inválido
            }
        });
    });
});
