function abrirImagen(src) {
  const modal = document.getElementById("popupImagen");
  const imagen = document.getElementById("popupImagenSrc");

  imagen.src = src;
  modal.style.display = "flex";
}

function cerrarImagen() {
  document.getElementById("popupImagen").style.display = "none";
}

// Cerrar si se hace clic fuera de la imagen
window.addEventListener("click", function(e) {
  const modal = document.getElementById("popupImagen");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
