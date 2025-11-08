/* function mostrarPopupCarrito() {
  const popup = document.getElementById("popupCarrito");
  popup.style.display = "flex";

  // se cierra solo después de 2s
  setTimeout(() => {
    popup.style.display = "none";
  }, 1200);
}

// botón X cierra manualmente
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cerrarPopupCarrito").addEventListener("click", () => {
    document.getElementById("popupCarrito").style.display = "none";
  });
}); */

// popupCarrito.js
function mostrarPopupCarrito() {
  const popup = document.getElementById("popupCarrito");
  if (!popup) return; // seguridad
  popup.style.display = "flex";

  // se oculta solo después de 1.2s
  setTimeout(() => {
    popup.style.display = "none";
  }, 1200);
}

// cerrar con la X
document.addEventListener("DOMContentLoaded", () => {
  const btnCerrar = document.getElementById("cerrarPopupCarrito");
  if (btnCerrar) {
    btnCerrar.addEventListener("click", () => {
      const popup = document.getElementById("popupCarrito");
      if (popup) popup.style.display = "none";
    });
  }
});

