function mostrarPopupCarrito() {
  const popup = document.getElementById("popupCarrito");
  popup.style.display = "flex";

  // se cierra solo después de 2s
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}

// botón X cierra manualmente
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cerrarPopupCarrito").addEventListener("click", () => {
    document.getElementById("popupCarrito").style.display = "none";
  });
});
