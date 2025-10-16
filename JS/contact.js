/* Contact Page*/
const form = document.getElementById('contact-form');
const modal = document.getElementById('success-modal');
const textarea = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita recargar la página

    fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
    }).then(res => {
    if (res.ok) {
        modal.style.display = 'flex'; // muestra el modal
        form.reset(); // limpia los campos
    } else {
        alert('Error al enviar. Intenta de nuevo.');
    }
    }).catch(err => {
    alert('Error al enviar. Intenta de nuevo.');
    });
});

// cerrar modal al hacer clic en cualquier parte
modal.addEventListener('click', () => {modal.style.display = 'none';});

// Ajuste automáticamente del textarea
textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
});