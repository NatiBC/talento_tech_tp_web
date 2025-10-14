/* Gallery Page*/
const images = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.popup .close');

images.forEach(img => {
    img.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImg.src = img.src; // mostramos la misma imagen
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Cerrar al hacer clic fuera de la imagen
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
    popup.style.display = 'none';
    }
});

// --- POPUP SOLO TEXTO ---
const galleries = document.querySelectorAll('.gallery');
const popupDescription = document.getElementById('popup-description');

galleries.forEach(gallery => {
gallery.addEventListener('click', () => {
    const description = gallery.getAttribute('data-description');
    popupDescription.textContent = description || "Sin descripción disponible.";
    popup.style.display = 'block';
});
});

closeBtn.addEventListener('click', () => {
popup.style.display = 'none';
});

window.addEventListener('click', e => {
if (e.target === popup) {
    popup.style.display = 'none';
}
});