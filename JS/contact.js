/* Contact Page*/
const form = document.getElementById('contact-form');
const modal = document.getElementById('success-modal');
const textarea = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita recargar la página

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const validationBox = document.getElementById("validation-messages");
    const errors = [];

    // Validaciones
    if (name.length < 6) errors.push("El nombre debe tener al menos 6 caracteres.");
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(name)) 
        errors.push("El nombre no puede contener números ni símbolos.");
    if (!validateEmail(email)) errors.push("El correo electrónico no es válido.");
    if (message.length < 20) errors.push("El mensaje debe tener al menos 20 caracteres.");

    // Mostrar errores SI LOS HAY
    if (errors.length > 0) {
        validationBox.style.display = "block";
        validationBox.innerHTML = errors.join("<br>");
        return; // <-- IMPORTANTE: NO ENVÍA NADA
    }

    // Si no hay errores, oculta mensajes
    validationBox.style.display = "none";

    // AHORA SÍ: Enviar
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(res => {
        if (res.ok) {
            modal.style.display = 'flex';
            form.reset();
        } else {
            alert('Error al enviar. Intenta de nuevo.');
        }
    }).catch(err => {
        alert('Error al enviar. Intenta de nuevo.');
    });
});

// cerrar modal
modal.addEventListener('click', () => { modal.style.display = 'none'; });

// Ajuste del textarea
textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
});

// Función de validación de email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
